/* this is the homepage component 
should have horizontal scrolling topics and conditionally rendered content underneath that
equal to the "home" icon on the footer */
import "./homepage.css";
import { Link } from "react-router";

export default function Home() {
  return (
    <section className="homepage">
      <div className="homepagecolourblock">
        <h1 className="homepagetitle">
          Learning Irish? <h1 className="animated"></h1>
        </h1>
      </div>
      <div className="homepagescroll">
        <h2>
          here will be a horizontal scrolling list of topics - mapping like the
          thumbnail gallery. but until then:
        </h2>
        <ul className="templist">
          <Link to={"/topics/pets"}>
            <li>pets</li>
          </Link>
          <Link to={"/drinks"}>
            <li>drinks</li>
          </Link>
          <Link to={"/colours"}>
            <li>colours</li>
          </Link>
          <Link to={"/jobs"}>
            <li>jobs</li>
          </Link>
        </ul>
      </div>
      <div className="irishbox">
        <h3>DID YOU KNOW?</h3>
        <ul>
          <li>There are no words for yes or no in the Irish language.</li>
          <li>
            But there are three different number systems! One for maths, one for
            counting people and one for counting anything non-human 🧑‍🏫
          </li>
          <li>There are also 45 different ways to say stone...</li>
          <li>
            Irish is part of the 9% of languages that use Verb-Subject-Object
            (like Spanish!)
          </li>
        </ul>
      </div>
    </section>
  );
}
