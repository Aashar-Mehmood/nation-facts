import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [countryName, setCountryName] = useState('');
  const navigate = useNavigate();
  function handleSearch(e){
    setCountryName(e.target.value);
    if(e.key==="Enter"){
      navigate(`/details/${countryName}`);
    }
  }
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
        onKeyUp={handleSearch}
        className="focus:outline-none bg-inherit h-full"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
