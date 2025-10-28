import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from "../api/operations";

import { Country } from "../types/Country";
import { CountryCard } from "@/components/CountryCard";
import { EmptyPage } from "@/components/EmptyPage";
import { toast } from "sonner";

export function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <EmptyPage isLoading={true} />;

  if (error) {
    toast.error("Error loading countries");
    return <EmptyPage />;
  }

  const countries = data?.countries || [];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Countries List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country: Country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>
    </div>
  );
}
