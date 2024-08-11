import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./services/app";
import Home from "./services/Home/Home";
import Drive from "./services/drive/Drive";
import DriveHome from "./services/drive/DriveHome";
import Stream from "./services/streaming/Stream";
import StreamHome from "./services/streaming/StreamHome";
import User from "./services/user/User";
import LogIn from "./services/user/auth/LogIn";
import NotFundPage from "./components/NotFundPage";

// Defining routes with their respective layouts
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
    ],
  },
  {
    path: "/",
    element: <Drive />,
    children: [
      { path: "/", element: <Navigate to="/drive" /> },
      { path: "/drive", element: <DriveHome /> },
    ],
  },
  {
    path: "/",
    element: <Stream />,
    children: [
      { path: "/", element: <Navigate to="/stream" /> },
      { path: "/stream", element: <StreamHome /> },
    ],
  },
  {
    path: "/",
    element: <User />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
  {
    path: "*",
    element: <NotFundPage />,
  },
]);
export default router;
