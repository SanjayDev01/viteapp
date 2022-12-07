import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ALLPosts from "./AllPosts";
import "./App.css";
import MessageBoard from "./MesageBoard";
import NavBar from "./NavBar";
import PostView from "./PostView";
import Welcome from "./Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <ALLPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
