import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="flex-[1] h-screen bg-orange-300">
        {" "}
        <Sidebar />
      </div>
      <div className="flex-[4]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
