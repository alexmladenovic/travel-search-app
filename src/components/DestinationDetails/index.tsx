import { FunctionComponent } from "react";
import { Destination } from "../../types/types";

type DestinationDetailsProps = {
  destination: Destination | null;
  onSelectNearby: (name: string) => void;
};

const DestinationDetails: FunctionComponent<DestinationDetailsProps> = ({
  destination,
  onSelectNearby,
}) => {
  if (!destination) {
    return <></>;
  }

  return (
    <div className="p-6 bg-white border-2 border-gray-300 rounded-lg shadow-md mt-6">
      {/* Destination Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {destination.name}
      </h2>

      {/* Destination Description */}
      <p className="text-gray-600 mb-4">{destination.description}</p>

      {/* Location Information */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Location Details
        </h3>
        <p className="text-gray-500">
          Latitude: {destination.latitude}, Longitude: {destination.longitude}
        </p>
      </div>

      {/* Nearby Destinations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Top 5 Nearby Destinations
        </h3>
        <ul className="list-disc pl-5">
          {destination.nearbyDestinations?.map((nearby) => (
            <li key={nearby.name}>
              <span
                className="cursor-pointer text-blue-500 hover:underline"
                onClick={() => onSelectNearby(nearby.name)}
              >
                {nearby.name}
              </span>{" "}
              - {Math.floor(nearby.distance ?? 0)} km away
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationDetails;
