import "../components/message.css";
export default function Chatmsg(props) {
  return (
    <div className="chatmessage">
      <h2>{props.data.username}</h2>
      <p>{props.data.message}</p>
    </div>
  );
}
