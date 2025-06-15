import "./pets.css";

export default function Pets() {
  <section className="sectionBox">
    <div className="cat">
      <h1>Cat</h1>
      <h2>Cat</h2>
      <img
        src="https://unsplash.com/photos/orange-and-white-tabby-cat-BHJs5TZ-Nt0"
        alt="A orange and white cat stares at the camera. The cat is licking its lips and standing against a flat pink backdrop"
      />
      <audio>
        {" "}
        <source
          src="https://static.learn-irish.net/sounds/Irish/Pets_01.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  </section>;
}

/* import { useEffect, useState } from "react";
export default function Pets() {
  const [petData, setpetData] = useState([]);
  useEffect(() => {
    async function petBox() {
      const res = await fetch(`${import.meta.env.VITE_FETCH_PORT}/pets`);
      const petData = await res.json();
      console.log(petData);
      setpetData(petData);
    }
    petBox();
  });
  return (
    <div>
       {petData.map(function (data) { return (
            <petBox
              key={data.eng_id}
              url={data.source}
              alt={data.alt_text}
              irish={data.word}
              sound={data.word_spoken}
            />
          );
        })}
    </div>

  );
}
I used the console log of "pets" to have the information close at hand .. sorry I know mapping would have been better but I ran out of time!!
 */
