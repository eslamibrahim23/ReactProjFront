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
          {!localStorage.getItem("userInfo") && 
          <>
         
          <Link to="/Register" className="text-2xl ">
            Register
          </Link>
          <Link to="/Login" className="text-2xl ">
            Login
          </Link>
         
          </>
          }
            {localStorage.getItem("userInfo") && 
          <button className="text-red-400" onClick={LogOut}>
            LogOut
          </button>
          }
        </div>

        <div className="navbar-end"></div>
      </div>
  
    </>
  );
}

export default NavBar;

