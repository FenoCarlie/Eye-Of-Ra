import { Outlet } from "react-router-dom";
import { useNotificationContext } from "../contexts/NotificationContext";
import Notification from "../components/common/Notification";
import { useAuthentContext } from "../contexts/AuthentContext";

function App() {
  const { notifications } = useNotificationContext();

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex flex-row">
        {/* <nav className="w-auto h-auto">
        <SideBar />
      </nav> */}
        <div className="w-full h-full flex flex-col">
          {/* <header className="w-full h-[59px]">
          <Header />
        </header> */}
          <main className="w-full h-full">
            <Outlet />
          </main>
        </div>
        <div className="fixed z-20 h-auto w-auto top-20 right-0 px-5">
          {notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
