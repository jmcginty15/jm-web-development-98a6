import { LinksFunction } from "@remix-run/node";
import styles from "./indexNumber.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface IndexNumberArgs {
  indexNumber: number;
}

export default function IndexNumber({ indexNumber }: IndexNumberArgs) {
  const indexNumberString =
    `${indexNumber}`.length === 1 ? `0${indexNumber}` : `${indexNumber}`;
  return <span className="indexNumber">{indexNumberString}.</span>;
}
