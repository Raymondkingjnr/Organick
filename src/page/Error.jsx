import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid place-items-center px-8 min-h-[100vh] bg-[#eff6f1]">
        <div className="text-center">
          <p className="text-9xl font-semibold text-gray-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-[#274c5b]">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 text-[#274c5b]">
            Sorry we couldn't find the page you'ar looking for.
          </p>
          <div className="mt-10">
            <Link to={"/"} className="btn btn-success">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <div>Error</div>;
};

export default Error;
