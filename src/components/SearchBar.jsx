import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar() {
  return (
    <div
      tabIndex="1"
      className="p-4 rounded-md shadow space-x-4 bg-lightElementBg dark:bg-darkElementBg"
    >
      <FontAwesomeIcon
        className="text-slate-400"
        icon={faSearch}
      ></FontAwesomeIcon>
      <input
        className="focus:outline-none bg-inherit"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
