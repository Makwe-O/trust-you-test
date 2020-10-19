import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='spinner'>
      <h3>
        Sorry, this page dosent exist <Link to='/'>GO HOME</Link>{" "}
      </h3>
    </div>
  );
};

export default NotFound;
