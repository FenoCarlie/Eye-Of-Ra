import { Outlet } from "react-router-dom";
import { useNotificationContext } from "../contexts/NotificationContext";
import Notification from "../components/common/Notification";
import { useAuthentContext } from "../contexts/AuthentContext";
import Header from "../components/common/Header";

function App() {
  const { notifications } = useNotificationContext();

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex flex-col">
        <header className="w-full h-auto">
          <Header />
        </header>
        <main className="w-full h-full">
          <Outlet />
        </main>
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
