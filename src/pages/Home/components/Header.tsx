import { FunctionComponent } from "react";

type IProps = {
  title: string;
};

const Header: FunctionComponent<IProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold mb-4">{title}</h1>;
};

export { Header };
