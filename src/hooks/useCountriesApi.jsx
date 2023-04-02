import { CountriesContext } from "../Context/CountriesProvider";
import {useEffect, useContext } from "react";
import axios from "axios";
const axiosInstance = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});
export default function useCountriesApi(){
    const {setCountries, setDetails} = useContext(CountriesContext);
    function countriesBasicInfo() {
        useEffect(()=>{
            axiosInstance.get('/all?fields=name,flags,population,region,capital')
            .then((response)=>{
                if(response.status===200){
                    let limitedCountries = response.data.slice(0, 50);
                    setCountries(limitedCountries);
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }, []);
    }

    function countryDetailInfo(countryName){
        useEffect(()=>{
            axiosInstance.get(`name/${countryName}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages`)
            .then((response)=>{
                if(response.status === 200){
                    setDetails(response.data);
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }, []);
    }

    return {countriesBasicInfo, countryDetailInfo};
    
}
