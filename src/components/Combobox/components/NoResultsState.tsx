import { FunctionComponent } from "react";
import { ResultContainer } from "./ResultContainer";

const NoResultsState: FunctionComponent = () => (
  <ResultContainer>
    <div className="h-[200px] text-gray-500 flex items-center justify-center">
      No results found
    </div>
  </ResultContainer>
);

export { NoResultsState };
