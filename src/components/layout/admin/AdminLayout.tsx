import { Outlet } from "react-router-dom";
import DashboardSidebar from "./AdminSidebar";
import { Toaster } from "sonner";
import DashboardNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-row">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <DashboardNavbar />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AdminLayout;
