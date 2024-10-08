import { Outlet } from "react-router-dom";
import { useNotificationContext } from "../../contexts/NotificationContext";
import Notification from "../../components/common/Notification";

function User() {
  const { notifications } = useNotificationContext();
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex flex-row">
        <div className="w-full h-full flex flex-col">
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

export default User;
