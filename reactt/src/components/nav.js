import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/abut">abut</Link>
        </li>
        <li>
          <Link to="/Contact">contact</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
