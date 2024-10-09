import { FunctionComponent } from "react";
import { ResultContainer } from "./ResultContainer";

const ErrorState: FunctionComponent<{ error: string }> = ({ error }) => (
  <ResultContainer>
    <div className="h-[200px] text-gray-500 flex items-center justify-center text-red-500">
      {error}
    </div>
  </ResultContainer>
);

export { ErrorState };
