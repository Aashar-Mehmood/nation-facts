import { CountriesContext } from "../Context/CountriesProvider";
import { useEffect, useContext } from "react";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});
export default function useCountriesApi() {
  const { setCountries, setDetails, region } = useContext(CountriesContext);
  function countriesBasicInfo(regionName) {
    var link = "";
    useEffect(() => {
      if (regionName === "Filter by Region") {
        link = "/all";
      } else {
        link = `/region/${regionName}`;
      }
      link += "?fields=name,flags,population,region,capital";
      axiosInstance
        .get(link)
        .then((response) => {
          if (response.status === 200) {
            let limitedCountries =
              response.data.length > 50
                ? response.data.slice(0, 50)
                : response.data;
            setCountries(limitedCountries);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, [region]);
  }

  function countryDetailInfo(countryName) {
    useEffect(() => {
      axiosInstance
        .get(
          `/name/${countryName}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages`
        )
        .then((response) => {
          if (response.status === 200) {
            setDetails(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  return { countriesBasicInfo, countryDetailInfo };
}
