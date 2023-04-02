import { useState, createContext } from "react";
export const CountriesContext = createContext(); 
export default function CountriesProvider({children}) {
    const [countries, setCountries] = useState([]);
    const [details, setDetails] = useState([]);
    const [region, setRegion] = useState('Filter by Region');
    return(
        <CountriesContext.Provider value={{countries, setCountries, details, setDetails, region, setRegion}}>
            {children}
        </CountriesContext.Provider>
    )
}