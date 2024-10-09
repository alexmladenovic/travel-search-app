import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { StringParam, useQueryParam, withDefault } from "use-query-params";
import Combobox from "../../components/Combobox";
import DestinationDetails from "../../components/DestinationDetails";
import { Loader } from "../../components/Loader";
import { Header } from "./components/Header";
import { ErrorState } from "./components/ErrorState";
import { fetchDestinationDetails } from "../../api";
import { LoadingState } from "./components/LoadingState";

type IProps = {};

const Home: FunctionComponent<IProps> = () => {
  const [selectedCity, setSelectedCity] = useQueryParam(
    "city",
    withDefault(StringParam, ""),
  );

  const {
    data: selectedDestination = null,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["fetchDestinationDetails", selectedCity],
    queryFn: () => fetchDestinationDetails(selectedCity),
    enabled: selectedCity !== "",
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleSelectDestination = async (name: string) => {
    setSelectedCity(name);
  };

  if (selectedCity) {
    handleSelectDestination(selectedCity);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header title="Travel Destination Search" />
      <Combobox onSelect={handleSelectDestination} />
      {isError && <ErrorState className="text-red-500 mt-2" error={error} />}
      {isLoading && <LoadingState />}
      {!isLoading && !isError && selectedDestination && (
        <DestinationDetails
          destination={selectedDestination}
          onSelectNearby={handleSelectDestination}
        />
      )}
    </div>
  );
};

export { Home };
