/* this component will be the chat/post interaction for users */
import { useEffect, useState } from "react";
import Form from "../components/Form";
import Message from "../components/Message";

export default function Chat() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function pollingMsg() {
      const res = await fetch(`${import.meta.env.VITE_FETCH_PORT}/post`);
      //   http://localhost:8081/post
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    pollingMsg();
    const intervalId = setInterval(pollingMsg, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {data.map((items) => {
        return <Message key={items.text} data={items} />;
      })}
      <Form />
    </>
  );
}
