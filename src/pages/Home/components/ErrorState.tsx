import { FunctionComponent } from "react";

type IProps = {
  error: Error;
  className?: string;
};

const ErrorState: FunctionComponent<IProps> = ({ error, className }) => {
  return <div className={className}>{error?.message}</div>;
};

export { ErrorState };
