import "./footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <nav className="footer">
        <Link className="homelink" to={"/"}>
          HOME
        </Link>
        <p className="divide"> / </p>
        <Link className="learnlink" to={"/topics"}>
          LEARN
        </Link>
        <p className="divide"> / </p>
        <Link className="quizlink" to={"/quizpage"}>
          QUIZ
        </Link>
        <p className="divide"> / </p>
        <Link className="chatlink" to={"/chat"}>
          CHAT
        </Link>
      </nav>
    </>
  );
}
