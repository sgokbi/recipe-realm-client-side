import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        alert("Something went wrong! couldn't log out!");
      });
  };

  return (
    <div className="bg-base-100">
      <div className="container mx-auto lg:px-20 py-4 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-6 shadow bg-base-100  w-52"
            >
              <li className="my-2 ">
                <Link>Home</Link>
              </li>

              <li className="my-2">
                <Link>Recipes</Link>
              </li>
              <li className="my-2">
                <Link>Join Contributor</Link>
              </li>
              <li className="my-2">
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-orange-600 text-2xl font-medium cursor-pointer ms-2 lg:ms-0"
          >
            RecipeRealm
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="hover:!text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link>Recipes</Link>
            </li>
            <li>
              <Link>Join Contributor</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* NOTE FIXME show name when hover the image   */}
          <p>{user?.displayName}</p>

          {user && (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar me-2"
            >
              <div className="w-10 rounded-full">
                <img src="login-pic.jpg" />
              </div>
            </label>
          )}
          {/* <Link to="/login" className="btn">
            LogIn
          </Link> */}

          {user ? (
            <Link onClick={handleLogOut} to="/login" className="btn">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn">
              LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
