import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const DashboardPage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    nav("/login");
    localStorage.setItem("signIn", false);
  };

  return (
    <div className="flex">
      <nav className="main-menu text-blue-100 bg-blue-800 h-screen flex flex-col justify-between w-1/6">
        <div className="nav-top">
          <div className="logo text-2xl flex items-center bg-blue-900 px-4 h-16 shadow">
            <i className="fa fa-air-freshener pr-2" />
            <h2 className="italic tracking-wide">rFreshr</h2>
          </div>
          <ul className="flex flex-col space-y-2 p-4">
            <Link
              to={"/dashboard"}
              className="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out"
            >
              <i className="fa fa-home pr-2" />
              <span className="nav-text">Dashboard</span>
            </Link>
            <Link
              to="/dashboard/inventory"
              className="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out"
            >
              <p>
                <i className="fa fa-images pr-2" />
                <span className="nav-text">Inventory</span>
              </p>
            </Link>
            <Link
              to="/dashboard/blogs"
              className="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out"
            >
              <p>
                <i className="fa fa-list pr-2" />
                <span className="nav-text">Blogs</span>
              </p>
            </Link>
            <Link
              to={"/dashboard/users"}
              className="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out"
            >
              <p>
                <i className="fa fa-folder-open pr-2" />
                <span className="nav-text">Users</span>
              </p>
            </Link>
          </ul>
        </div>
        <button onClick={handleLogout} className="logout p-4">
          <li className="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out list-none ">
            <a>
              <i className="fa fa-power-off" />
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </button>
      </nav>
      <div id="main-content" className="bg-gray-100 w-full flex flex-col">
        <div
          id="search-header"
          className="shadow h-16 px-4 flex items-center justify-between text-gray-600"
        >
          <div className="capitalize">
            <i className="fa fa-search mr-4" />
            search
          </div>
          <div className="flex items-center">
            <i className="fa fa-bell mr-4" />
            <img
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user avatar"
              className="rounded-full h-6"
            />
          </div>
        </div>
        <div
          id="content-area"
          className=" bg-gray-300 text-gray-800 p-8 h-full"
        >
          <h2 className="capitalize text-2xl font-semibold text-blue-800">
            {<Outlet />}
          </h2>
          <div className="h-64 border-2 border-blue-800 rounded border-dashed p-4 my-4" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
