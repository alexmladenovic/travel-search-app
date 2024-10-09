import { destinations } from "./data/destinationData";

export const fetchDestinations = async (query: string): Promise<string[]> => {
  console.log("Query:", query);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!query) return [];

  validateRequest(query);

  return destinations
    .filter((dest) => dest.name.toLowerCase().includes(query.toLowerCase()))
    .map((dest) => dest.name);
};

const validateRequest = (query: string) => {
  if (query === "fail") {
    throw new Error("Failed to fetch");
  }
};
