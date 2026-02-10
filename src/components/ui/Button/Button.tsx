interface Props {
  onClick: () => void;
  child: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

function Button({ onClick, child, variant = "primary", size = "md" }: Props) {
  const baseStyles =
    "font-bold rounded-lg transition-colors duration-200 font-semibold hover:shadow-lg active:scale-95 transform transition-transform";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-secondary text-white hover:bg-purple-600",
    accent: "bg-accent text-white hover:bg-pink-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {child}
    </button>
  );
}

export default Button;
