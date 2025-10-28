import { useParams } from "react-router-dom";
import { GET_COUNTRY_DETAILS } from "../api/operations";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { EmptyPage } from "@/components/EmptyPage";

export function CountryDetails() {
  const { code } = useParams();

  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) {
    return <EmptyPage isLoading={true} />;
  }
  if (error) {
    console.error("Error fetching country details:", error);
    return <p>Error fetching country details</p>;
  }

  const country = data?.country;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Item variant="outline" size="default" className="shadow-lg">
        <ItemMedia>
          <span className="text-6xl">{country?.emoji}</span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-2xl">{country?.name}</ItemTitle>
          <ItemDescription>
            <div className="flex flex-col gap-2 mt-2">
              <p>
                <span className="font-semibold">Code:</span>{" "}
                <span className="font-mono">{country?.code}</span>
              </p>
              {country?.continent && (
                <p>
                  <span className="font-semibold">Continent:</span>{" "}
                  {country.continent.name}
                </p>
              )}
            </div>
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
