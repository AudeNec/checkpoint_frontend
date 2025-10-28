import { useParams } from "react-router-dom";

export function CountryDetails() {
  const countryId = useParams().countryId;
  return <p>Country Details for {countryId}</p>;
}
