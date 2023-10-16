import "./Button.css";

export const Button = ({
  children,
  type = "black",
  className = "",
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`button button_${type} ${className}`}>
      {children}
    </button>
  );
};
