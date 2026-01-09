interface Props {
  onClick: () => void;
  child: React.ReactNode;
}

function Button({ onClick, child }: Props) {
  return (
    <button type="button" onClick={onClick}>
      {child}
    </button>
  );
}

export default Button;