/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstname: yup.string().required().min(3),
    lastname: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const userImage =
      "https://xsgames.co/randomusers/assets/avatars/male/5.jpg";
    const user = await axios.post(
      "https://backreact-4r53.onrender.com/users/signup",
      { ...d, userImage },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (user.data.status === "success") {
      console.log("yes");
      navigate("/Login");
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1 className="text-3xl text-blue-400 p-5 w-full m-auto text-center">
        Registeration
      </h1>
      <div className="flex m-auto w-100 justify-center items-center my-10">
        {/* <div className="mx-10">
          <img
            src="src/assets/images/R.jpg"
            width={600}
            // height={6000}
            alt=""
          />
        </div> */}
        <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-96 m-auto  ">
            <label className="mt-3">First Name:</label>
            <input {...register("firstname")} />
            <p className="text-red-500 text-md">{errors.firstname?.message}</p>
            <label className="mt-2">Last Name:</label>
            <input {...register("lastname")} />
            <p className="text-red-500 text-md">{errors.lastname?.message}</p>
            <label className="mt-2">Email:</label>
            <input {...register("email")} />
            <p className="text-red-500 text-md">{errors.email?.message}</p>
            <label className="mt-2">Password:</label>
            <input type="password" {...register("password")} />
            <p className="text-red-500 text-md ">{errors.password?.message}</p>

            <input className="mt-5" id="submit-btn" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}


// /* eslint-disable no-unused-vars */
// // import React from 'react'
// import { object, string } from "yup";
// import { useState } from "react";

// function Register() {
//   const regSchema = object({
//     firstname: string().required(),
//     lastname: string().required().min(5),
//   });
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//   });
//   const [errors, setErrors] = useState({
//     firstname: null,
//     lastname: null,
//   });
//   const preventSubmit = (e) => {
//     e.preventDefault();
//     const finaldata = {
//       firstname: data.firstname,
//       lastname: data.lastname,
//     };
//     console.log(data.firstname.length);
//     try {
//       const schemaResult = regSchema.validateSync(finaldata, {
//         abortEarly: false,
//       });
//     } catch (error) {
//       const newError = { ...errors };
//       error.inner.forEach((err) => {
//         newError[err.path] = err.message;
//       });
//       setErrors(newError);
//       //   console.log(error.inner);
//     }
//     //trim to delete start and end spaces
//     // if (
//     //   !data.firstname.trim() ||
//     //   !data.lastname.trim() ||
//     //   data.firstname.length < 3
//     // ) {
//     //   console.log("valid error");
//     // } else {
//     //   console.log(finaldata);
//     // }
//   };
//   const onChaneHandler = (e) => {
//     const newData = { ...data };
//     newData[e.target.name] = e.target.value;
//     setData(newData);
//   };
//   return (
//     <div className="m-5">
//       <div className=" w-1/4 m-auto ">
//         <form onSubmit={preventSubmit}>
//           <div className="flex flex-col">
//             <label
//               htmlFor="firstname"
//               className="py-1 w-24 text-xl bg-gray-300-600"
//             >
//               First Name
//             </label>
//             <input
//               value={data.firstname}
//               onChange={onChaneHandler}
//               className="py-1  w-72 border rounded-md border-slate-950 hover:border"
//               type="text"
//               name="firstname"
//               id="firstname"
//             />
//             <span className="text-red-100">{errors.firstname}</span>
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="lastname"
//               className="py-1 w-24 text-xl bg-gray-300-600"
//             >
//               Last Name
//             </label>
//             <input
//               value={data.lastname}
//               onChange={onChaneHandler}
//               className="py-1  w-72 border rounded-md border-slate-950 hover:border"
//               type="text"
//               name="lastname"
//               id="lastname"
//             />
//             <span className="text-red-100">{errors.lastname}</span>
//           </div>

//           <button>dsadf</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

// console.log(data);
// const data = await axios.get("http://localhost:3000/1");
// const res = await fetch("http://localhost:3000/1");
// const data = await res.json();
// setUsers(data);
