import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_COUNTRIES } from "../api/operations";

import { Country } from "../types/Country";

export function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const countries = data?.countries || [];

  return (
    <ul>
      {countries.map((country: Country) => (
        <article key={country.code}>
          {country.name} {country.emoji}
          <Link to={`/countries/${country.code}`}>Details</Link>
        </article>
      ))}
    </ul>
  );
}
