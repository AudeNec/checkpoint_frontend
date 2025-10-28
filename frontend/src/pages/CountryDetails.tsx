import { useParams } from "react-router-dom";
import { GET_COUNTRY_DETAILS } from "../api/operations";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

export function CountryDetails() {
  const { code } = useParams();

  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error("Error fetching country details:", error);
    return <p>Error fetching country details</p>;
  }

  const country = data?.country;

  return (
    <div>
      <p>Country Details for {country?.name}</p>
      <p>Code: {country?.code}</p>
      <p>Emoji: {country?.emoji}</p>
    </div>
  );
}
