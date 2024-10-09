import { Destination } from "../../../types/types";
import { calculateDistance } from "./utils";
import { destinations } from "./data/destinationData";

export const fetchDestinationDetails = async (
  name: string,
): Promise<Destination | null> => {
  console.log("Fetching details for:", name);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const destination = destinations.find((dest) => dest.name === name);
  if (!destination) {
    throw new Error("Destination not found");
  }

  const nearbyDestinations = getNearbyDestinations(destination);

  return {
    ...destination,
    nearbyDestinations,
  };
};

const getNearbyDestinations = (destination: Destination) => {
  return destinations
    .filter((dest) => dest.name !== destination.name)
    .map((dest) => ({
      ...dest,
      distance: calculateDistance(
        destination.latitude,
        destination.longitude,
        dest.latitude,
        dest.longitude,
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5)
    .map((dest) => dest.name);
};
