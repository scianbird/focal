import { Link } from "react-router";
import "./notfound.css";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry!</h1>
      <p>
        You either got lost or travelled here from the future, since this
        content is not in existence!
      </p>
      <Link to={"/"}>Time to get you back home</Link>
    </div>
  );
}

//side note I actually tend to roll my eyes at the quirky/cutesy not-found messages but whats better than pretending i have enough time to code a quiz and then showing you this instead
