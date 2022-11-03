// import * as React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <nav id="sidebar">
      <ul>
        <li>
          <NavLink to="test">Test Page</NavLink>
        </li>
        <li>
          <NavLink to="posts/testing">Dynamic Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};
