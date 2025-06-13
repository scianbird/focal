import "../components/message.css";
export default function Chatmsg(props) {
  return (
    <div className="chatholder">
      <div className="chatmessage">
        <div className="imgtxt">
          {" "}
          <img src={props.data.icon} /> <h2>{props.data.username}</h2>
          <h2 className="firstname">({props.data.first_name})</h2>{" "}
        </div>
        <p className="messageText">{props.data.message}</p>
      </div>
    </div>
  );
}
