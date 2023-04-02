import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import DropDownItem from "./DropDownItem";
import { CountriesContext } from "../Context/CountriesProvider";
const regionsList = [
  "Africa",
  "Asia",
  "America",
  "Europe",
  "Oceania",
  "Filter by Region",
];
export default function FilterDropDown() {
  const [showDropDown, setShowDropDown] = useState(false);
  const { region, setRegion } = useContext(CountriesContext);
  function selectRegion(e) {
    setRegion(e.target.value);
  }
  return (
    <div
      onClick={() => setShowDropDown((prevState) => !prevState)}
      className="bg-lightElementBg dark:bg-darkElementBg shadow rounded-md py-4 mt-6 md:max-w-lg md:mx-auto lg:max-w-none lg:mt-0"
    >
      <div className="flex justify-between px-4 items-center relative md:cursor-pointer md:hover:cursor-pointer">
        {region}
        <FontAwesomeIcon
          icon={faAngleDown}
          className="ring-transparent"
        ></FontAwesomeIcon>
        <div
          className="absolute left-0 top-12 bg-lightElementBg
         dark:bg-darkElementBg rounded-md shadow w-full "
        >
          {showDropDown &&
            regionsList.map((list, index) => {
              return (
                <DropDownItem
                  key={index}
                  value={list}
                  handleClick={selectRegion}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
