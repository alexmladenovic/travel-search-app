import { FunctionComponent } from "react";
import { Destination } from "../../../types/types";

type IProps = {
  nearbyDestinations: Destination[];
  onSelectNearby: (name: string) => void;
};

const NearLocations: FunctionComponent<IProps> = ({
  nearbyDestinations,
  onSelectNearby,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Top 5 Nearby Destinations
      </h3>
      <ul className="list-disc pl-5">
        {nearbyDestinations?.map((nearby: Destination) => (
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
  );
};

export { NearLocations };
