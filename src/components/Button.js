import "./Button.css";

const Button = ({ click }) => {
  return (
    <div className="Button-wrapper">
      <button onClick={click}></button>
    </div>
  );
};

export default Button;
