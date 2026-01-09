interface Props {
    familyName:string;
    score?:number
}

function Goodbye({familyName,score}:Props) {
  return (
    <div>
      <p>Goodbye, {familyName}! {score?`your score its ${score}.`:null}</p>
    </div>
  );
}
export default Goodbye;