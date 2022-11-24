import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Button from "../../compenents/Button/Button";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="flex items-center h-full p-16  text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl text-gray-500 font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="text-red-400 my-3">
            {error.statusText || error.message}
          </p>
          <Link to="/">
            <Button> Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
