import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiHome4Fill,
  RiHome4Line,
  RiInboxArchiveFill,
  RiInboxArchiveLine,
} from "react-icons/ri";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation me-3">
      <ul>
        <li>
          <Link to="/">
            {location.pathname === "/" ? <RiHome4Fill /> : <RiHome4Line />}
          </Link>
        </li>
        <li>
          <Link to="/archived">
            {location.pathname === "/archived" ? (
              <RiInboxArchiveFill />
            ) : (
              <RiInboxArchiveLine />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
