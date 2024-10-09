import { FunctionComponent } from "react";
import { Destination } from "../../types/types";
import { Header } from "./components/Header";
import { Description } from "./components/Description";
import { Information } from "./components/Information";
import { NearLocations } from "./components/NearLocations";

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
      <Header name={destination.name} />

      <Description description={destination.description} />

      <Information
        longitude={destination.longitude}
        latitude={destination.latitude}
      />

      <NearLocations
        nearbyDestinations={destination.nearbyDestinations}
        onSelectNearby={onSelectNearby}
      />
    </div>
  );
};

export default DestinationDetails;
