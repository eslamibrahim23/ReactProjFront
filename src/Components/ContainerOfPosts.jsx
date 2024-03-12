import { useNavigate } from "react-router-dom";
import AddIcon from "./AddIcon";
import ShowPosts from "./ShowPosts";

function ContainerOfPosts() {
  


  return (
    <div>
      <div className="flex h-screen">
        <div className="bg-gray-100 lg:w-1/5 md:w-4/5  rounded-lg">
        
        </div>
        <div className="bg-base-100 lg:w-3/5 md:w-1/5 rounded-md">
          <ShowPosts />
          <AddIcon />
        </div>
        <div className="bg-gray-100 lg:w-1/5 md:w-4/5  rounded-lg"></div>
      </div>
    </div>
  );
}

export default ContainerOfPosts;
