// import { useNavigate } from "react-router-dom";
import AddIcon from "./AddIcon";
import ShowPosts from "./ShowPosts";

function ContainerOfPosts() {
  return (
    <div className="w-full">
      <div className="flex h-screen">
        <div className="bg-gray-100 lg:w-1/5 md:w-1/5 w-0 rounded-lg"></div>
        <div className="bg-base-100 lg:w-3/5 md:w-3/5 sm:w-5/5 w-full rounded-md">
          <ShowPosts />
          <AddIcon />
        </div>
        <div className="bg-gray-100 lg:w-1/5 md:w-1/5  w-1/5 w-0   rounded-lg"></div>
      </div>
    </div>
  );
}

export default ContainerOfPosts;
