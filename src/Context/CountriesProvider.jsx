import { useState, createContext } from "react";
export const CountriesContext = createContext(); 
export default function CountriesProvider({children}) {
    const [countries, setCountries] = useState([]);
    const [details, setDetails] = useState([]);
    return(
        <CountriesContext.Provider value={{countries, setCountries, details, setDetails}}>
            {children}
        </CountriesContext.Provider>
    )
}