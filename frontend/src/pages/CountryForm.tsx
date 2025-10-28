import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_COUNTRY, GET_CONTINENTS } from "../api/operations";

type FormData = {
  name?: string;
  code?: string;
  emoji?: string;
  continent?: string;
};

export function CountryForm() {
  const [formData, setFormData] = useState<FormData>({});

  const [addCountryMutation, { loading, error }] = useMutation(ADD_COUNTRY);

  const { data: continents } = useQuery(GET_CONTINENTS);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.code || !formData.emoji) {
      alert("Please fill in all fields.");
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
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Code:
          <input
            type="text"
            name="code"
            value={formData.code || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Emoji:
          <input
            type="text"
            name="emoji"
            value={formData.emoji || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Continent:
          <select
            name="continent"
            onChange={handleChange}
            value={formData.continent || ""}
          >
            <option value="">Select Continent</option>
            {continents?.continents.map((continent: any) => (
              <option key={continent.id} value={continent.id}>
                {continent.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
