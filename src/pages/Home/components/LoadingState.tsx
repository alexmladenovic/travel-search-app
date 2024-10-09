import { FunctionComponent } from "react";
import { Loader } from "../../../components/Loader";

type IProps = {};

const LoadingState: FunctionComponent<IProps> = () => {
  return (
    <div className="h-[200px] text-gray-500 flex items-center justify-center">
      <Loader />
    </div>
  );
};

export { LoadingState };
