import { FunctionComponent } from "react";
import { ResultContainer } from "./ResultContainer";

const ResultsList: FunctionComponent<{
  results: string[];
  onSelect: (result: string) => void;
}> = ({ results, onSelect }) => (
  <ResultContainer>
    <ul className="max-h-60">
      {results.map((result) => (
        <li
          key={result}
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(result)}
        >
          {result}
        </li>
      ))}
    </ul>
  </ResultContainer>
);

export { ResultsList };
