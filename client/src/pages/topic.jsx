import { Routes, Route } from "react-router";
import Pets from "./pets";
import { Link } from "react-router";

export default function Topic() {
  return (
    <div>
      <>
        <h1>topic page</h1>
      </>{" "}
      <Routes>
        <Route path="pets" element={<Pets />} />
      </Routes>
      <Link to={"/topics/pets"}>pets</Link>
    </div>
  );
}
