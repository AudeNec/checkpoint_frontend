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
import { toast } from "sonner";

type FormData = {
  name?: string;
  code?: string;
  emoji?: string;
  continent?: string;
};

export function CountryForm() {
  const [formData, setFormData] = useState<FormData>({});

  const [addCountryMutation, { loading }] = useMutation(ADD_COUNTRY);

  const { data: continents } = useQuery(GET_CONTINENTS);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      continent: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.code || !formData.emoji) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    try {
      await addCountryMutation({
        variables: {
          data: {
            ...formData,
            continent: { id: Number(formData.continent) },
          },
        },
      });
      toast.success("Pays ajouté avec succès !");
      setFormData({});
    } catch (error) {
      console.error("Error adding country:", error);
      toast.error("Erreur lors de l'ajout du pays");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input
          id="name"
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleInputChange}
          placeholder="Enter country name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="code" className="text-sm font-medium">
          Code
        </label>
        <Input
          id="code"
          type="text"
          name="code"
          value={formData.code || ""}
          onChange={handleInputChange}
          placeholder="Enter country code (e.g., FR)"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="emoji" className="text-sm font-medium">
          Emoji
        </label>
        <Input
          id="emoji"
          type="text"
          name="emoji"
          value={formData.emoji || ""}
          onChange={handleInputChange}
          placeholder="Enter emoji flag"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="continent" className="text-sm font-medium">
          Continent
        </label>
        <Select value={formData.continent} onValueChange={handleSelectChange}>
          <SelectTrigger id="continent" className="w-full">
            <SelectValue placeholder="Select a continent" />
          </SelectTrigger>
          <SelectContent>
            {continents?.continents.map((continent: any) => (
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
    </form>
  );
}
