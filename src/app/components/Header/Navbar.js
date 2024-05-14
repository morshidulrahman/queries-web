import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import useTheme from "../../hooks/useTheme";
import { BsMoonStarsFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [nextTheme, setTheme] = useTheme();
  const { user, Logout } = useAuth();

  const navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#017b6e] " : "text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/queries"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#017b6e]" : "text-lg"
          }
        >
          Queries
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/recommendation"
              className={({ isActive }) =>
                isActive
                  ? " text-lg font-[600]   py-3  text-[#017b6e]"
                  : "text-lg"
              }
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myqueries"
              className={({ isActive }) =>
                isActive
                  ? " text-lg font-[600]   py-3  text-[#017b6e]"
                  : "text-lg"
              }
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myrecommendations"
              className={({ isActive }) =>
                isActive
                  ? " text-lg font-[600]   py-3  text-[#017b6e]"
                  : "text-lg"
              }
            >
              My recommendations
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    Logout();
    toast.success("Logged out successfully");
  };

  return (
    <nav className="w-full border-b dark:bg-gray-900 dark:text-white bg-white dark:border-b-gray-800">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          <div className="flex space-x-2">
            <Link className="text-3xl font-bold font-heading" to="/">
              <img
                src="https://i.ibb.co/8gWMykG/rebit.png"
                alt="rebyr"
                className="w-40"
              />
            </Link>
          </div>
          <div>
            <ul
              className={` ${
                toggle
                  ? "flex  fixed top-0 right-0 w-48 bg-slate-100 dark:bg-gray-800 h-full flex-col justify-center items-center z-50 gap-4 text-center lg:hidden"
                  : "lg:flex items-center hidden md:space-x-4 lg:space-x-5"
              }`}
            >
              {navitems}
              <span
                className="lg:hidden absolute top-3 right-[155px] dark:text-white"
                onClick={() => settoggle(false)}
              >
                <GrFormClose
                  size={23}
                  className="dark:bg-white rounded-full text-gray-800"
                />
              </span>
            </ul>
          </div>
          <div className="flex items-center md:space-x-4 space-x-2">
            <div className="" onClick={() => setTheme(nextTheme)}>
              {nextTheme === "dark" ? (
                <BsMoonStarsFill size={23} />
              ) : (
                <BiSun size={23} />
              )}
            </div>
            <div className="relative">
              {!user ? (
                <div className="flex md:gap-4 gap-2">
                  <Link to="/login">
                    <button className="bg-[#017b6e] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#017b6e] duration-300 transition-all border border-[#017b6e]">
                      Login
                    </button>
                  </Link>
                </div>
              ) : (
                <div
                  className="flex gap-4 items-center"
                  title={user?.displayName}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="me"
                    className="h-10 w-10 rounded-full p-1 bg-black"
                  />

                  <button
                    onClick={handleLogout}
                    className="bg-[#017b6e] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#017b6e] duration-300 transition-all border border-[#017b6e] "
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            <span
              className="lg:hidden block dark:text-white"
              onClick={() => settoggle(true)}
            >
              <AiOutlineMenu size={28} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
