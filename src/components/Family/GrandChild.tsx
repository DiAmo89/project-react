interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function GrandChild({ count, setCount }: Props) {
  return (
    <div style={{ border: "solid gold 2px", margin: "20px" }}>
      GrandChild
      {count}
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}