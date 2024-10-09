import { FunctionComponent } from "react";

const Header: FunctionComponent<{ name: string }> = ({ name }) => (
  <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
);

export { Header };
