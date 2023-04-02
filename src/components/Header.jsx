import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../Context/ThemeProvider";
import { useContext, useEffect } from "react";
export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  useEffect(() => {
    darkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkTheme]);
  return (
    <div
      className="
    px-6 py-4 
    flex justify-between items-center 
    shadow-md 
    bg-lightElementBg dark:bg-darkElementBg
    sm:px-10"
    >
      <h2 className="text-lg font-bold">Where in the world?</h2>
      <div onClick={() => setDarkTheme((prevState) => !prevState)}>
        <FontAwesomeIcon
          title={darkTheme ? "Change Theme to Light" : "Change Theme to Dark"}
          className="outline-none text-xl p-2 sm:mr-4 -rotate-12 md:hover:cursor-pointer md:opacity-80 md:hover:opacity-100"
          icon={darkTheme ? faMoon : faSun}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
