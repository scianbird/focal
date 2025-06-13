import { useState } from "react";

//writing it in WET code to see if I can spy where I was going wrong

export default function Form() {
  const [data, setData] = useState({
    username: "",
    first_name: "",
    icon: "",
    bio: "",
    text: "",
  });
  function handleData(event) {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); //clear the form after submit
    fetch(import.meta.env.VITE_FETCH_PORT + "/newpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      setData({
        username: "",
        first_name: "",
        icon: "",
        message: "",
      });
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
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          name="message"
          required
          value={data.message}
          onChange={handleData}
        />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
