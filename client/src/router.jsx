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
import AuthGuard from "./components/AuthGuard";
import UserManage from "./services/user/management/UserManage";

// Defining routes with their respective layouts
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
    ],
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <Drive />
      </AuthGuard>
    ),
    children: [
      { path: "/", element: <Navigate to="/drive" /> },
      { path: "/drive", element: <DriveHome /> },
    ],
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <Stream />
      </AuthGuard>
    ),
    children: [
      { path: "/", element: <Navigate to="/stream" /> },
      { path: "/stream", element: <StreamHome /> },
    ],
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <User />
      </AuthGuard>
    ),
    children: [
      { path: "/", element: <Navigate to="/user" /> },
      { path: "/user", element: <UserManage /> },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "*",
    element: <NotFundPage />,
  },
]);
export default router;
