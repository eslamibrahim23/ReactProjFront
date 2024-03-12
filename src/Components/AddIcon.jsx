import { Link, useNavigate } from "react-router-dom";

function AddIcon() {
  const navigate = useNavigate();
  const sn = () => {
    navigate("/Addpost");
    // nav("/Addpost");
  };
  return (
    <>
      <Link to="/Addpost" className="text-2xl ">
        <svg
          onClick={sn}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </Link>
    </>
  );
}

export default AddIcon;
