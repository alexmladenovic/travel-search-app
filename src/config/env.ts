import local from "./env.local";
import production from "./env.production";

let env = local;
switch (process.env.REACT_APP_ENV) {
  case "local":
    env = local;
    break;
  case "production":
    env = production;
    break;
  default:
    env = local;
}

export default env;
