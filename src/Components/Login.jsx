/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const userLogin = await axios.post(
      "https://backreact-4r53.onrender.com/users/login",
      { ...d },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (userLogin.data.token) {
      const token = JSON.stringify(userLogin.data.token);
      localStorage.setItem("userInfo", token);
      navigate("/Home");
    }
  };

  return (
    <>
     <h1 className="text-3xl text-blue-400 p-5 w-full m-auto text-center">
        Login
      </h1>
      <div className="flex m-auto w-100 justify-center items-center my-10">
        {/* <div className="mx-10">
          <img src="src/assets/images/R.jpg" width={600} alt="" />
        </div> */}
        <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-96 m-auto  ">
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

export default Login;
