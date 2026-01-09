interface Props {
    name:string;
}

function Greetings({name}:Props) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
export default Greetings;