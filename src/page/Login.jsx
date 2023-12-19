import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../features/User/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);

  const initailState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initailState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    dispatch(signIn(values.email, values.password));
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="h-screen grid place-items-center">
      <article className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h1 className=" text-center font-bold text-lg ">Login</h1>
        <main className="grid gap-y-4 mt-8 place-items-center">
          <input
            type="email"
            placeholder="Enter Pmail"
            name="email"
            onChange={handleChange}
            className="p-2 w-[300px] bg-slate-200 outline-none border-transparent rounded-md"
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            className="p-2 w-[300px] bg-slate-200 outline-none border-transparent rounded-md"
          />
        </main>
        <button className="btn" onClick={handleSignIn} disabled={isLoading}>
          Sign In
        </button>
        <div className=" float-right mt-8">
          <p className=" text-sm font-bold">
            Don't Have An account?{" "}
            <Link className=" text-yellow-700" to={"/register"}>
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Login;
