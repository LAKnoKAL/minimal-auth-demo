import React from "react";
import { Link } from "react-router-dom";

const Page404: React.FC = () => {
  return (
    <div>
      <h2>Ups, can't find this page!</h2>
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </div>
  );
};

export default Page404;
