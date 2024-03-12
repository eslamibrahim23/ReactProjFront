// import Drawer from "../Components/Drawer";
// import Drawer from "../Components/Drawer";
import { Outlet } from "react-router-dom";

import NavBar from "../Components/NavBar";

export default function PostsLayout() {
  return (
    <>
      <div className="w-full">
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
