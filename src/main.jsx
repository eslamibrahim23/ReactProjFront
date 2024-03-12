import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage.jsx";
import Register from "./Components/Register.jsx";
import PostsLayout from "./routes/PostsLayout.jsx";
import ContainerOfPosts from "./Components/ContainerOfPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import Login from "./Components/Login.jsx";
import EditPost from "./pages/EditPost.jsx";

// import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Home",
        element: <ContainerOfPosts />,
      },
      {
        path: "AddPost",
        element: <AddPost />,
      },
      {
        path: "EditPost/:id",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
