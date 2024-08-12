import React, { createContext, useState } from "react";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const toggleLocale = () => {
    setLocale((prevState) => (prevState === "en" ? "in" : "en"));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
