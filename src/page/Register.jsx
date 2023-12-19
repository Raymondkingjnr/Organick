import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../features/User/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(signUp(values.email, values.password, values.name));
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
        <h1 className=" text-center font-bold text-lg ">Register</h1>
        <main className="grid gap-y-4 mt-8 place-items-center">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleChange}
            value={values.name}
            className="p-2 w-[300px] bg-slate-200 outline-none border-transparent rounded-md"
          />
          <input
            type="email"
            placeholder="Enter Pmail"
            name="email"
            onChange={handleChange}
            value={values.email}
            className="p-2 w-[300px] bg-slate-200 outline-none border-transparent rounded-md"
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="p-2 w-[300px] bg-slate-200 outline-none border-transparent rounded-md"
          />
        </main>
        <button className="btn" onClick={handleSignUp} disabled={isLoading}>
          {isLoading ? (
            <span className="loading loading-ring loading-xs"></span>
          ) : (
            <h1>Sign up</h1>
          )}
        </button>
        <div className=" float-right mt-8">
          <p className=" text-sm font-bold">
            Already Have An account?{" "}
            <Link className=" text-yellow-700" to={"/login"}>
              {" "}
              Sign in
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Register;
