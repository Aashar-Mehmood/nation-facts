import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
export default function Header() {
  return (
    <div className="px-4 py-6 flex justify-between items-center shadow-md bg-lightElementBg dark:bg-darkElementBg">
      <h2 className="text-lg font-bold">Where in the world?</h2>
      <div>
        <FontAwesomeIcon
          tabIndex="0"
          className="text-xl sm:mr-4"
          icon={faMoon}
        ></FontAwesomeIcon>
        <span className="hidden sm:block">Dark</span>
      </div>
    </div>
  );
}
