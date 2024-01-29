import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiContext } from "../store/ApiContext.store";
import { register } from "../service/user.service";

const RegisterPage = () => {
  const { data } = useContext(apiContext);
  const nav = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.target.disabled = true;
    e.preventDefault();
    if (data.find((el) => el.email === userData.email)) {
      alert("User already exists");
      setUserData({
        email: "",
        password: "",
      });
    } else {
      register("user", userData).then(() => nav("/login"));
    }
  };
  return (
    <div className="w-full h-screen grid place-content-center ">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto  border shadow-lg  rounded-lg px-10 py-5 border-gray-300"
      >
        <div className="mb-5">
          <h1 className="text-2xl font-bold mb-5 text-gray-700 text-center">
            Register Page
          </h1>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="jhonDoe@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            type="password"
            id="password"
            placeholder="••••••••"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
        <p className="text-black mt-5">
          Already have an account?{" "}
          {
            <Link className="hover:underline text-blue-600" to="/login">
              Login
            </Link>
          }
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
