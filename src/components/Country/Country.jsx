import "./country.css";

const Country = ({ country }) => {
  const { name, capital, flags } = country;
  return (
    <div className="country">
      <h3>Country: {name?.common} </h3>
      <p>
        Capital: <b>{capital}</b>
      </p>
      <img src={flags.png} alt={`${name?.common}'s Flag`} />
    </div>
  );
};

export default Country;
