import { FunctionComponent } from "react";

const Description: FunctionComponent<{ description: string }> = ({
  description,
}) => <p className="text-gray-600 mb-4">{description}</p>;

export { Description };
