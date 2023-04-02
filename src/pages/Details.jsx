import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import loadingGif from "../assets/Spinner-0.5s-124px.svg";
import { useState, useContext, useEffect } from "react";
import useCountriesApi from "../hooks/useCountriesApi";
import { CountriesContext } from "../Context/CountriesProvider";
import { nanoid } from "nanoid";
export default function Details() {
  const [loading, setLoading] = useState(false);
  const {countryName} = useParams();
  const navigate = useNavigate();
  const {countryDetailInfo} = useCountriesApi();
  const {details} = useContext(CountriesContext);
  countryDetailInfo(countryName); 
  useEffect(()=>{
    details.length > 0 && setLoading(false);
  }, [details.length])
  
  return (
    loading ? 
    <img className="relative left-2/4 -translate-x-2/4 z-10" src={loadingGif} alt="loading..." /> 
    :
    details.map((detail)=>{
      return <div key={nanoid(10)}>
      <div className="mt-4">
        <button onClick={()=>navigate('/')} className="px-6 py-2 rounded-md shadow bg-lightElementBg dark:bg-darkElementBg">
          <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon>
          <span className="ml-2">Back</span>
        </button>
      </div>
      <img className="mt-16 border border-slate-900" src={detail.flags.png}  alt={detail.flags.alt} />
      <h2 className="text-2xl font-bold my-6">{detail.name.official}</h2>
      <p className="mb-2">
        <span className="font-bold">Native Name : </span>
        {
        Object.values(Object.values(detail.name.nativeName)[0])[0]
        }
      </p>
      <p className="mb-2">
        <span className="font-bold">Population : </span>{detail.population}
      </p>
      <p className="mb-2">
        <span className="font-bold">Region : </span>{detail.region}
      </p>
      <p className="mb-2">
        <span className="font-bold">Sub Region : </span>{detail.subregion}
      </p>
      <p className="mb-10">
        <span className="font-bold">Capital : </span>{detail.capital[0]}
      </p>
      <p className="mb-2">
        <span className="font-bold">Top Level Domain : </span>{detail.tld[0]}
      </p>
      <p className="mb-10">
        <span className="font-bold">Curriencies : </span>
        {
          Object.values(detail.currencies)
          .map((currency)=>{
            return currency.name + " ";
          })
        }
      </p>
     
      <h2
       className="text-2xl mb-2 font-bold">Languages : </h2>
       {
        Object.values(detail.languages).map((lang)=>{
          return <div key={nanoid(10)} className="inline-block border px-4 py-1 shadow mr-2 my-1">
            {lang}
            </div>
        })
       }
    </div>
    })
    
  );
}
