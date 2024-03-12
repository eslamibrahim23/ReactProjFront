/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


export default function Home(props) {
  const { loading } = props;

  if (loading)
    return (
      <h2 className="h-96 flex justify-center items-center">
        Loading...<span className="loading loading-spinner loading-lg"></span>
      </h2>
    );


  const [imageUpload, setImageUpload] = useState(null);
  const [uploadedimage, setuploadedimage] = useState();

  const imageListRef = ref(storage, `images/`);
  const uploadImage = (event) => {
    if (imageUpload == null) return;
    
    const imageref = ref(storage, `images/${imageUpload.name+ v4()}`);
    //v4 an libarary genreate uniqe ids 

    uploadBytes(imageref, imageUpload).then((d) => {
      getDownloadURL(d.ref).then((url) => {
        setuploadedimage(url);
        // setImageList((prev) => [...prev, url]);
        // setImageList((prev) => [url]);
        // setImageList(url);
      });
    });
  };



  // console.log(imageList);
  return (
    <>
      <div>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
            console.log(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload</button>

     
         <img  src={uploadedimage} />;
       
      </div>
    </>
  );
}
