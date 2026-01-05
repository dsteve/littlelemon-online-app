import "@/index.css";
import restaurant from "@assets/restaurant.jpg";

import { Link } from "react-router-dom";

import { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${user}. This is your password: ${pwd}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-flow-row justify-center border rounded-xl border-primary-green p-10 bg-primary-green font-karla font-normal text-lg">
        <div className="flex gap-2 p-2">
          <label htmlFor="user" className="py-0.5 text-white text-right w-22">
            User:
          </label>
          <input
            type="text"
            id="user"
            value={user} // controlled input
            onChange={(e) => setUser(e.target.value)} // update state
            placeholder="> Enter your email"
            className="ml-2 p-0.5 text-black bg-white w-80"
          />
        </div>

        <div className="flex gap-2 p-2">
          <label
            htmlFor="password"
            className="py-0.5 text-white text-right w-22"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={pwd} // controlled input
            onChange={(e) => setPwd(e.target.value)} // update state
            placeholder="> Enter your password"
            className="ml-2 p-0.5 text-black bg-white w-80"
          />
        </div>

        <div className="flex flex-row-reverse mt-5 text-white">
          <button
            type="submit"
            className="px-5 py-2 border border-white rounded-sm text-center"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="font-karla font-medium underline text-sm">
        <Link to="/change-pwd">Forgot your password ?</Link>
      </div>

      <div className="flex flex-row gap-2 font-karla font-normal text-sm">
        Don't have an account?
        <Link to="/sign-in" className="font-medium underline">Sign in</Link>
      </div>
    </form>
  );
}

function Login() {
  return (
    <div className="grid grid-cols-[4fr_7fr] w-full h-full bg-secondary-beige">
      <div className="col-start-1 aspect-square w-full overflow-hidden">
        <img
          src={restaurant}
          alt="restaurant"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="col-start-2 grid grid-cols-[fr-auto-fr] grid-rows-[fr-auto-fr]">
        <div className="col-start-2 row-start-2 w-[80%]">
          <div className="font-karla font-bold text-4xl text-center text-black">
            <p>Login</p>
            <p className="text-sm">Work In Progress</p>
          </div>
          <div className="pt-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
