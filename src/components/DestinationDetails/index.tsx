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
    <div className="p-4 border-2 border-gray-300 rounded-md mt-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">{destination.name}</h2>
      <p>{destination.description}</p>
      <h3 className="text-lg font-semibold mt-2">Top 5 Nearby Destinations</h3>
      <ul className="list-disc pl-5">
        {destination.nearbyDestinations?.map((nearby) => (
          <li
            key={nearby}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => onSelectNearby(nearby)}
          >
            {nearby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationDetails;
