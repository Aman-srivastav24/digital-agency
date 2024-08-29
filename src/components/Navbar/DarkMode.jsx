import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  // Set default theme to dark if not found in localStorage
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
    }
  }, [theme, element]); // add element as a dependency to the useEffect hook

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl cursor-pointer" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl cursor-pointer" />
      )}
    </>
  );
};

export default DarkMode;
