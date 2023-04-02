import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function CountryCard(props) {
  const {
    capital,
    flags: { png, alt },
    name: { official },
    population,
    region,
  } = props;
  return (
    <div className="mt-14 p-1 rounded-md shadow bg-lightElementBg text-lightText dark:bg-darkElementBg dark:text-darkText md:w-2/5 lg:w-28 xl:w-23">
      <img src={png} alt={alt} className="rounded-t-md w-full" />
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-4">{official}</h2>
        <p className="mt-2">
          <span className="font-bold">Population: </span>
          {population}
        </p>
        <p className="mt-2">
          <span className="font-bold">Region: </span>
          {region}
        </p>
        <p className="mt-2">
          <span className="font-bold">Capital: </span>
          {capital}
        </p>
        <Link
          to={`/details/${official}`}
          className="inline-block mt-6 text-indigo-600 border border-indigo-600 dark:text-darkText dark:border-white rounded-md px-4 py-2"
        >
          Details
          <FontAwesomeIcon
            className="ml-2 relative top-0.5 rotate-90"
            icon={faArrowUp}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}
