import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_COUNTRY, GET_CONTINENTS } from "../api/operations";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import {
  FormData,
  handleInputChange,
  handleSelectChange,
  handleFormSubmit,
} from "../services/countryFormService";
import { Continent } from "../types/Continent";

const inputFields = [
  { name: "name", label: "Name", placeholder: "Enter country name" },
  { name: "code", label: "Code", placeholder: "Enter country code (e.g., FR)" },
  { name: "emoji", label: "Emoji", placeholder: "Enter emoji flag" },
] as const;

export function CountryForm() {
  const [formData, setFormData] = useState<FormData>({});

  const [addCountryMutation, { loading, error }] = useMutation(ADD_COUNTRY);
  const { data: continents } = useQuery(GET_CONTINENTS);

  return (
    <form
      onSubmit={(e) =>
        handleFormSubmit(e, formData, addCountryMutation, setFormData)
      }
      className="space-y-6 max-w-md mx-auto p-6"
    >
      {inputFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label htmlFor={field.name} className="text-sm font-medium">
            {field.label}
          </label>
          <Input
            id={field.name}
            type="text"
            name={field.name}
            value={formData[field.name as keyof FormData] || ""}
            onChange={(e) => handleInputChange(e, setFormData)}
            placeholder={field.placeholder}
          />
        </div>
      ))}

      <div className="space-y-2">
        <label htmlFor="continent" className="text-sm font-medium">
          Continent
        </label>
        <Select
          value={formData.continent}
          onValueChange={(value) => handleSelectChange(value, setFormData)}
        >
          <SelectTrigger id="continent" className="w-full">
            <SelectValue placeholder="Select a continent" />
          </SelectTrigger>
          <SelectContent>
            {continents?.continents.map((continent: Continent) => (
              <SelectItem key={continent.id} value={String(continent.id)}>
                {continent.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit"}
      </Button>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </form>
  );
}
