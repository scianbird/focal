import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <h1>WRONG PLACE</h1>
      <Link to={"/"}>Home</Link>
    </>
  );
}
