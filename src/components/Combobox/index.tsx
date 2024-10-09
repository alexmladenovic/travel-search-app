import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useState } from "react";
import { fetchDestinations } from "../../api/fake-api";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { NoResultsState } from "./components/NoResultsState";
import { ResultsList } from "./components/ResultsList";
import { SearchInput } from "./components/SearchInput";

type ComboboxProps = {
  onSelect: (destination: string) => void;
};

const Combobox: FunctionComponent<ComboboxProps> = ({ onSelect }) => {
  const [query, setQuery] = useState("");

  const {
    data: results = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["fetchDestinations", query],
    queryFn: () => fetchDestinations(query),
    enabled: query !== "",
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleSelect = (result: string) => {
    setQuery("");
    onSelect(result);
  };

  return (
    <div className="relative">
      <SearchInput query={query} setQuery={setQuery} />

      {isLoading && <LoadingState />}
      {isError && <ErrorState error={(error as Error)?.message} />}
      {query !== "" && !isLoading && !isError && results.length === 0 && (
        <NoResultsState />
      )}
      {results.length > 0 && (
        <ResultsList results={results} onSelect={handleSelect} />
      )}
    </div>
  );
};

export default Combobox;
