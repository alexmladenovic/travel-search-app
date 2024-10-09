import { FunctionComponent } from "react";

const SearchInput: FunctionComponent<{
  query: string;
  setQuery: (value: string) => void;
}> = ({ query, setQuery }) => (
  <input
    type="text"
    className="w-full border-2 border-gray-300 rounded-md p-2"
    placeholder="Search for a destination"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export { SearchInput };
