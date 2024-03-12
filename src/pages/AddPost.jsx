/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function AddPost() {
  const [imageUpload, setImageUpload] = useState(null);
  const [uploadedimage, setuploadedimage] = useState();

  const uploadImage = (event) => {
    if (imageUpload == null) return;
    const imageref = ref(storage, `images/${imageUpload.name + v4()}`);
    //v4 an libarary genreate uniqe ids
    uploadBytes(imageref, imageUpload).then((d) => {
      getDownloadURL(d.ref).then((url) => {
        postreq(url);
      });
    });
  };
  const [data, setData] = useState({
    title: "",
    body: "",
    image: "",
  });
  const onChaneHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  let authorizationToken = localStorage.getItem("userInfo");
  console.log(authorizationToken);

  const decoded = jwtDecode(authorizationToken);
  console.log(decoded);

  const navigate = useNavigate();
  async function postreq(url) {
    console.log("sending");
    console.log(decoded);
    try {
      const post1 = await axios.post(
        "https://backreact-4r53.onrender.com/posts/create",
        {
          title: data.title,
          body: data.body,
          image: url,
          createdBy: decoded,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (post1.data.status === "success") {
        console.log("yes posted");
        navigate("/Home");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="lg:w-3/4 w-3/4 m-auto p-3 bg-gray-100">
        <div className="w-3/4 m-auto">
          <div className="  block">
            <div>
              <h1
                name="title"
                className="text-base-600 text-3xl "
                value={data.title}
              >
                Create Post
              </h1>
            </div>

            <div className=" w-full  border block">
              <textarea
                className=" w-full px-3"
                placeholder="title"
                id="textArea"
                name="title"
                rows="1"
                // cols="lg:100 "
                value={data.title}
                onChange={onChaneHandler}
              ></textarea>
            </div>
            <div className=" w-full border block">
              <textarea
                className="w-full px-3"
                placeholder="What`s on your mind..."
                id="textArea"
                name="body"
                rows="10"
                // cols="100"
                value={data.body}
                onChange={onChaneHandler}
              ></textarea>
            </div>
          </div>

          <div>
            <input
              className="w-full"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button onClick={uploadImage}>
              <button className="text-base-600 text-3xl btn btn-accent">
                AddPost
              </button>{" "}
            </button>
            <img src={uploadedimage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPost;
