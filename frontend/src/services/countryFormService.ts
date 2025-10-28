import { toast } from "sonner";

export type FormData = {
  name?: string;
  code?: string;
  emoji?: string;
  continent?: string;
};

export const validateCountryForm = (formData: FormData): boolean => {
  if (!formData.name || !formData.code || !formData.emoji) {
    toast.error("Please fill in all required fields");
    return false;
  }
  return true;
};

export const prepareCountryData = (formData: FormData) => {
  return {
    ...formData,
    continent: formData.continent
      ? { id: Number(formData.continent) }
      : undefined,
  };
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleSelectChange = (
  value: string,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  setFormData((prevData) => ({
    ...prevData,
    continent: value,
  }));
};

export const handleFormSubmit = async (
  e: React.FormEvent,
  formData: FormData,
  addCountryMutation: any,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  e.preventDefault();

  if (!validateCountryForm(formData)) {
    return;
  }

  try {
    await addCountryMutation({
      variables: {
        data: prepareCountryData(formData),
      },
    });
    toast.success("Country added successfully!");
    setFormData({});
  } catch (error) {
    console.error("Error adding country:", error);
    toast.error("Error adding country");
  }
};
