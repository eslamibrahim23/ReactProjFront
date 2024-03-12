import AddIcon from "./AddIcon";
import ContainerOfPosts from "./ContainerOfPosts";

function Drawer() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-gray-100 lg:w-1/5 md:w-4/5  rounded-lg">
          fsdsadfsfsdfd
        </div>
        <div className="bg-base-100 lg:w-4/5 md:w-1/5 rounded-md">
          <ContainerOfPosts />
          <AddIcon />
        </div>
      </div>
    </>
  );
}

export default Drawer;
