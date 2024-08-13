import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("appLocale") || "en";
  });

  const toggleLocale = () => {
    setLocale((prevState) => (prevState === "en" ? "in" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("appLocale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
