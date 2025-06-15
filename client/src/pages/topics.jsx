import { Routes, Route } from "react-router";
import Pets from "./pets";
import { Link } from "react-router";
import "./topics.css";

export default function Topic() {
  return (
    <div>
      <>
        <h1>topic page</h1>
        <h1>hello</h1>
      </>{" "}
      <Routes>
        <Route path="pets" element={<Pets />} />
      </Routes>
      <Link to={"/pets"}>pets</Link>
    </div>
  );
}
