import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useState, useEffect } from "react";
import { StringParam, useQueryParam, withDefault } from "use-query-params";
import Combobox from "../../components/Combobox";
import DestinationDetails from "../../components/DestinationDetails";
import { Header } from "./components/Header";
import { ErrorState } from "./components/ErrorState";
import { fetchDestinationDetails } from "../../api";
import { LoadingState } from "./components/LoadingState";
import WelcomeModal from "../../components/WelcomeModal";

type IProps = {};

const Home: FunctionComponent<IProps> = () => {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useQueryParam(
    "city",
    withDefault(StringParam, ""),
  );

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenModal) {
      setIsWelcomeModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setIsWelcomeModalOpen(false);
    localStorage.setItem("hasSeenWelcomeModal", "true");
  };

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
      <WelcomeModal isOpen={isWelcomeModalOpen} setIsOpen={handleCloseModal} />

      <Header title="Travel Destination Search" />
      <Combobox onSelect={handleSelectDestination} />

      {isError && <ErrorState error={error} />}
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
