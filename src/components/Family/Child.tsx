import GrandChild from "./GrandChild";

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Child({ count, setCount }: Props) {
  return (
    <div style={{ border: "solid yellow 2px", margin: "20px" }}>
      Child
      <GrandChild count={count} setCount={setCount} />
    </div>
  );
}