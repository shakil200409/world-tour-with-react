import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, capital, flags, area, continents } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited-country"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Country: {name?.common}{" "}
      </h3>
      <p>
        Capital: <b>{capital}</b>
      </p>
      <img src={flags.png} alt={`${name?.common}'s Flag`} />
      <p>Area: {area} SQK </p>
      <p>Continent: {continents[0]} </p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Visit"}</button>
      {visited
        ? "I have Visited this country."
        : "I want to visit this Country!"}
      <br />
      <br />
      <button onClick={() => handleVisitedCountries(country)}>
        Add to visited
      </button>
    </div>
  );
};

export default Country;
