/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import AddPost from "../pages/AddPost";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
function ShowPosts() {
  const [allPosts, setAllPosts] = useState();

  useEffect(() => {
    async function getposts() {
      const getallposts = await axios.get(
        "https://backreact-4r53.onrender.com/posts/getall"
      );
      // console.log(getallposts);
      if (getallposts.status === 201) {
        return setAllPosts(getallposts.data.allPosts);
      }
    }
    getposts();
  }, []);

  const navigate = useNavigate();

  const deletePost = async (id) => {
    console.log(id);
    await axios.delete(`https://backreact-4r53.onrender.com/posts/${id}`);
    navigate(0);
    // console.log(deletePost);
  };
  // const EditPost = async (id) => {
  //   console.log(id);
  //   await axios.get(`https://backreact-4r53.onrender.com/posts/${id}`);
  //   navigate(0);
  //   // console.log(deletePost);
  // };
  console.log(allPosts);

  let authorizationToken = localStorage.getItem("userInfo");
  console.log(authorizationToken);

  const decoded = jwtDecode(authorizationToken);
  console.log(decoded);


  return (
    <>
      {allPosts ? (
        allPosts.map((s, i) => {
          return (
            <div key={i} className="card w-full bg-base-100 shadow-xl mb-5">
              <div className="card w-full m-auto">
                <div className="flex justify-around items-center">
                  <div className="avatar flex justify-around items-center gap-3">
                    <p>{`${s.createdBy.firstname} ${s.createdBy.lastname}`}</p>
                    <div className="avatar p-2">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center">
                        <img
                          className="w-full text-center"
                          src="https://xsgames.co/randomusers/assets/avatars/male/9.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  {(s.createdBy._id===decoded._id) && 
                    <div>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                          />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a onClick={() => deletePost(s._id)}>
                            <span className="text-red-600 font-bold">
                              Delete Post
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-red-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <Link to={`/EditPost/${s._id}`}>
                            <span className="text-blue-600 font-bold">
                              Edit Post
                            </span>
                            <svg
                              className=" w-6 h-6 text-blue-600 font-bold"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                   }
                
                </div>
              </div>
              <div className="px-5 pt-5 text-3xl">
                <h2 className="">{s.title}</h2>
              </div>
              <figure className="px-5 pt-5 w-full">
                <img src={s.image} alt="Shoes" className="rounded-xl w-full" />
              </figure>
              <div className="card-body items-center text-center">
                <p>{s.body}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="h-96 flex justify-center items-center">
          Loading...<span className="loading loading-spinner loading-lg"></span>
        </h2>
      )}
    </>
  );
}

export default ShowPosts;
