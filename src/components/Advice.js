import "./Advice.css";

const Advice = ({ info, error }) => {
  if (error) console.log(error);
  return (
    <div className="Advice-wrapper">
      <div className="Advice-id">ADVICE #{info?.slip.id}</div>
      <div className="Advice">"{info?.slip.advice}"</div>
    </div>
  );
};

export default Advice;
