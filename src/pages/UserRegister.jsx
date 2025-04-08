import React, { useState } from "react";
import { NavLink } from "react-router";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ username, roll, email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("response successful");
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(e);
  };

  return (
    <section className="w-full bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-900 p-5">
        <div className="py-5 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left text-gray-400"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <NavLink to="#" className="text-gray-400">
            <span>Back to Dashborad</span>
          </NavLink>
        </div>
        <div className="my-8">
          <h1 className="text-white text-4xl mb-3 font-bold">Sing Up</h1>
          <p className="text-gray-400">
            Enter your email and password to sign up!
          </p>
        </div>
        <div className="flex lg:flex-row lg:gap-x-5  flex-col gap-y-5">
          <button className="flex gap-x-2.5 cursor-pointer py-2 px-5 text-white items-center bg-gray-700 hover:bg-gray-800 rounded-[5px] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Sign up with Google </span>
          </button>
          <button className="flex gap-x-2.5 cursor-pointer py-2 px-5 text-white items-center bg-gray-700 hover:bg-gray-800 rounded-[5px] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
            <span>Sign up with X </span>
          </button>
        </div>
        <div className="relative py-3 sm:py-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
              Or
            </span>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="grid-cols-1 sm:col-span-1 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your fist name"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid-cols-1 sm:col-span-1 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />
            </div>
            <div className="grid-cols-1 sm:col-span-2 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Email
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid-cols-1 sm:col-span-2 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid-cols-1 sm:col-span-2 flex">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] border border-gray-400 mt-1"
                value={checked}
                onChange={(e) => setChecked(e.target.value)}
              />
              <span className="text-gray-400 ml-2">
                <span> By creating an account means you agree to the </span>
                <NavLink to="#" className="text-white">
                  terms and Conditions,
                </NavLink>
                <span> and our </span>
                <NavLink to="#" className="text-white">
                  Privacy Policy
                </NavLink>
              </span>
            </div>
            <div className="flex justify-center w-full grid-cols-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 rounded-[8px]">
              <button
                className="py-2.5 px-4 text-white font-bold cursor-pointer w-100"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserRegister;
