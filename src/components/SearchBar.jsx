import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    setCountryName(e.target.value);
    if (e.key === "Enter") {
      navigate(`/details/${countryName}`);
    }
  }
  return (
    <div
      tabIndex="1"
      className="flex items-center px-4 rounded-md shadow space-x-4 bg-lightElementBg dark:bg-darkElementBg md:max-w-lg md:mx-auto lg:max-w-none lg:ml-0 lg:w-28%"
    >
      <FontAwesomeIcon
        className="text-slate-400"
        icon={faSearch}
      ></FontAwesomeIcon>
      <input
        onKeyUp={handleSearch}
        className="focus:outline-none bg-inherit h-14 w-full"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
