import { Country } from "@/types/Country";
import { Link } from "react-router-dom";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Item variant="outline" className="hover:shadow-lg">
      <ItemMedia>
        <span className="text-4xl">{country.emoji}</span>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{country.name}</ItemTitle>
      </ItemContent>
      <ItemActions>
        <Link to={`/countries/${country.code}`}>
          <Button variant="default" size="lg">
            Details
          </Button>
        </Link>
      </ItemActions>
    </Item>
  );
};
