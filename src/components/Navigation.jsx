import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiHome4Fill,
  RiHome4Line,
  RiInboxArchiveFill,
  RiInboxArchiveLine,
} from "react-icons/ri";
import { NotesContext } from "../context/NotesContext";
import { LocaleContext } from "../context/LocaleContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Navigation() {
  const { logoutHandler } = useContext(NotesContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
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
        <li>
          <button className="note-item__locale-button" onClick={toggleLocale}>
            {locale}
          </button>
        </li>
        <li>
          <button className="note-item__theme-button" onClick={toggleTheme}>
            {theme}
          </button>
        </li>
        <li>
          <button className="note-item__logout-button" onClick={logoutHandler}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
