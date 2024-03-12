// import { Link } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
// import ContainerOfPosts from "./ContainerOfPosts";
// import AddIcon from "./AddIcon";

function NavBar() {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("userInfo");
    navigate("/Login");
  };

  return (
    <>
      <div className="navbar bg-gray-100">
        <div className="navbar-start"></div>
        <div className="navbar-center gap-32">
          <Link to="/Home" className="text-2xl ">
            Home
          </Link>
          {/* <Link to="/Register" className="text-2xl ">
            Register
          </Link>
          <Link to="/Login" className="text-2xl ">
            Login
          </Link> */}
          <button className="text-red-400" onClick={LogOut}>
            LogOut
          </button>
        </div>

        <div className="navbar-end"></div>
      </div>
      {/* <div className="flex h-screen">
        <div className="bg-gray-100 lg:w-1/5 md:w-4/5  rounded-lg">
          fsdsadfsfsdfd
        </div>
        <div className="bg-base-100 lg:w-4/5 md:w-1/5 rounded-md">
          <ContainerOfPosts />
          <AddIcon />
        </div>
      </div> */}
    </>
  );
}

export default NavBar;

// <div>
// <div>
//   <div className="flex items-center justify-between px-16 h-20 bg-sky-400">
//     <div className="cursor-pointer bg-transparent p-1">
//       <Link to="/Home" className="text-2xl ">  Home</Link>
//
//
//     </div>
//     <div className="cursor-pointer bg-transparent p-1">
//       <Link to="/Register" className="text-2xl ">
//         Register
//       </Link>
//     </div>
//     <div className="cursor-pointer bg-transparent p-1">
//       <Link to="/Login" className="text-2xl ">
//         Login
//       </Link>
//     </div>
//   </div>
// </div>
// </div>
