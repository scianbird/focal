import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    username: "",
    first_name: "",
    icon: "",
    bio: "",
    text: "",
  });
  function handleData(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault(); //clear the form after submit
    fetch(import.meta.env.VITE_FETCH_PORT + "/newpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setData({
      username: "",
      first_name: "",
      icon: "",
      bio: "",
      text: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Cuir teachtaireacht isteach</legend>
        <label htmlFor="username">username: </label>
        <input
          type="VARCHAR(255)"
          name="username"
          required
          value={data.username}
          onChange={handleData}
        />
        <label htmlFor="first_name">First Name:</label>
        <input
          type="VARCHAR(255)"
          name="first_name"
          required
          value={data.first_name}
          onChange={handleData}
        />
        <label htmlFor="icon">Icon:</label>
        <input
          type="text"
          name="icon"
          required
          value={data.icon}
          onChange={handleData}
        />
        <label htmlFor="bio">Bio:</label>
        <input
          type="text"
          name="bio"
          required
          value={data.bio}
          onChange={handleData}
        />
        <label htmlFor="text">Message:</label>
        <input
          type="text"
          name="text"
          required
          value={data.text}
          onChange={handleData}
        />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
