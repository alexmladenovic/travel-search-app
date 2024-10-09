import { FunctionComponent } from "react";

const Information: FunctionComponent<{
  latitude: number;
  longitude: number;
}> = ({ latitude, longitude }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">
      Location Details
    </h3>
    <p className="text-gray-500">
      Latitude: {latitude}, Longitude: {longitude}
    </p>
  </div>
);

export { Information };
