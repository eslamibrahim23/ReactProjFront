// import Drawer from "../Components/Drawer";
// import Drawer from "../Components/Drawer";
import { Outlet } from "react-router-dom";

import NavBar from "../Components/NavBar";

export default function PostsLayout() {
  return (
    <>
      <NavBar />
      <div >
      <Outlet/>
      </div>
   
    </>
  );
}
