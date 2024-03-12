/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function EditPost(p) {
  const { id } = useParams();
  const [uploadedimage, setuploadedimage] = useState();

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

  // const navigate = useNavigate();

  useEffect(() => {
    async function getPostById() {
      console.log("geeeeeeet");

      // console.log(decoded);
      try {
        const getOnePost = await axios.get(
          `https://backreact-4r53.onrender.com/posts/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(getOnePost.data.findById);
        const newdata = getOnePost.data.findById;
        setData({
          title: newdata.title,
          body: newdata.body,
          image: newdata.image,
        });
        if (getOnePost.data.status === "success") {
          console.log("yes posted");
          // navigate("/Home");
        }
      } catch (err) {
        console.log(err);
      }
    }
    getPostById();
  }, []);

  const [imageUpload, setImageUpload] = useState(null);
  const updatePost = (event) => {
    if (imageUpload == null) return;
    const imageref = ref(storage, `images/${imageUpload.name + v4()}`);
    //v4 an libarary genreate uniqe ids
    uploadBytes(imageref, imageUpload).then((d) => {
      getDownloadURL(d.ref).then((url) => {
        fetchUpdate(url);
      });
    });
  };

  let authorizationToken = localStorage.getItem("userInfo");

  const decoded = jwtDecode(authorizationToken);

  const navigate = useNavigate();
  async function fetchUpdate(url) {
    console.log("updatefunction");
    console.log(id);
    try {
      const updatedPost = await axios.put(
        `https://backreact-4r53.onrender.com/posts/${id}`,
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
      console.log(updatedPost);
      if (updatedPost.status === 200) {
        console.log("yes updated");
        navigate("/Home");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="w-3/4 m-auto p-3 bg-gray-100">
        <div className="w-3/4 m-auto">
          <div className="  block">
            <div>
              <h1
                name="title"
                className="text-base-600 text-3xl"
                value={data.title}
              >
                Edit Post
              </h1>
            </div>

            <div className="  border block">
              <textarea
                className="px-3"
                placeholder="title"
                id="textArea"
                name="title"
                rows="1"
                cols="100"
                value={data.title}
                onChange={onChaneHandler}
              ></textarea>
            </div>
            <div className="  border block">
              <textarea
                className="px-3"
                placeholder="What`s on your mind..."
                id="textArea"
                name="body"
                rows="10"
                cols="100"
                value={data.body}
                onChange={onChaneHandler}
              ></textarea>
            </div>
          </div>
          <div>
            <img className="w-full" src={data.image} />
          </div>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={updatePost}>
            <h1 className="text-base-600 text-3xl btn btn-accent">
              UpdatePost
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default EditPost;
