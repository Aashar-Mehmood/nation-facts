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
    <div className="mt-14 p-1 rounded-md shadow-lg bg-lightElementBg  dark:bg-darkElementBg md:w-43%  lg:w-28% xl:w-21%">
      <img
        src={png}
        alt={alt}
        className="rounded-md border border-slate-900 w-full lg:aspect-video"
      />
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-4 lg:text-2xl">{official}</h2>
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
          className="inline-block mt-6 transition-colors hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white text-indigo-600 border border-indigo-600 dark:border-white dark:text-darkText dark:hover:bg-darkBodyBg dark:focus:bg-darkBodyBg rounded-md px-4 py-2"
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
