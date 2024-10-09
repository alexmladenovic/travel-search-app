import { FunctionComponent } from "react";

type IProps = {
  error: Error;
};

const ErrorState: FunctionComponent<IProps> = ({ error }) => {
  return <div className="text-red-500 mt-2">{error?.message}</div>;
};

export { ErrorState };
