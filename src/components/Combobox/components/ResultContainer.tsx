import { FunctionComponent } from "react";

const ResultContainer: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="absolute bg-white border border-gray-300 w-full mt-1 overflow-auto rounded-md">
    {children}
  </div>
);

export { ResultContainer };
