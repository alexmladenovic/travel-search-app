import { FunctionComponent } from "react";
import { Loader } from "../../Loader";
import { ResultContainer } from "./ResultContainer";

const LoadingState: FunctionComponent = () => (
  <ResultContainer>
    <div className="h-[200px] text-gray-500 flex items-center justify-center">
      <Loader />
    </div>
  </ResultContainer>
);

export { LoadingState };
