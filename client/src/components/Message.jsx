export default function Chatmsg(props) {
  return (
    <div>
      <h2>{props.data.username}</h2>
      <p>{props.data.message}</p>
    </div>
  );
}
