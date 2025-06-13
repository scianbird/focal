export default function Message(props) {
  return (
    <div>
      <h2>{props.data.text}</h2>
      <p>{props.data.post_id}</p>
    </div>
  );
}
