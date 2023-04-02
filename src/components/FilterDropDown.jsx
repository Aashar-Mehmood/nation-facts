import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DropDownItem from "./DropDownItem";
const regionsList = ["Africa", "Asia", "America", "Europe", "Oceania"];
export default function FilterDropDown() {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [showDropDown, setShowDropDown] = useState(false);
  function selectRegion(e) {
    setSelectedRegion(e.target.value);
  }
  return (
    <div
      onClick={() => setShowDropDown((prevState) => !prevState)}
      className="bg-lightElementBg dark:bg-darkElementBg shadow rounded-md py-4 mt-6"
    >
      <div className="flex justify-between px-4 items-center relative md:cursor-pointer md:hover:cursor-pointer">
        {selectedRegion}
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
