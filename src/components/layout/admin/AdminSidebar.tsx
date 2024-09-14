// import { logout } from "@/redux/features/auth/authSlice";
// import { useAppDispatch } from "@/redux/hooks";

import {
  BiBarChart,
  BiListPlus,
  BiLogIn,
  BiMessageSquare,
  BiWallet,
} from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = () => {
  //   const dispatch = useAppDispatch();

  //   const handleLogOut = () => {
  //     dispatch(logout());
  //   };
  return (
    <div className="bg-gray-700 dark:bg-gray-950 hidden lg:block">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r border-[#010A1F] dark:border-[#333333] px-5 py-8">
        <div className="text-center">
          <Link to="/" className="font-bold text-2xl text-white">
            Car Flex
          </Link>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "AdminNavLink bg-gray-100 text-gray-700"
                    : "AdminNavLink"
                }
                to="/admin/home"
              >
                <BiBarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "AdminNavLink bg-gray-100 text-gray-700"
                    : "AdminNavLink"
                }
                to="/admin/manage-cars"
              >
                <BiWallet className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Manage Cars</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "AdminNavLink bg-gray-100 text-gray-700"
                    : "AdminNavLink"
                }
                to="/admin/manage-bookings"
              >
                <BiListPlus className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  Manage Bookings
                </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "AdminNavLink bg-gray-100 text-gray-700"
                    : "AdminNavLink"
                }
                to="/admin/manage-return-cars"
              >
                <BiMessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  Manage Return Cars
                </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "AdminNavLink bg-gray-100 text-gray-700"
                    : "AdminNavLink"
                }
                to="/admin/user-management"
              >
                <BiMessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  User Management
                </span>
              </NavLink>
            </div>
          </nav>
          <div className="mt-6">
            <div className="mt-6 ">
              <button className="AdminNavLink w-full flex justify-center border border-gray-500">
                <BiLogIn className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
