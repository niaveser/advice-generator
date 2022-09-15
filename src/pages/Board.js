import useDataFetching from "../hooks/useDataFetching";
import Advice from "../components/Advice";
import Button from "../components/Button";
import "./Board.css";
const Board = () => {
  const { error, info, refetch } = useDataFetching(
    `https://api.adviceslip.com/advice`
  );
  function handleNewAdvice() {
    refetch();
  }

  return (
    <div className="Board-wrapper">
      <Advice info={info} error={error} />
      <div className="Divider"></div>
      <Button click={handleNewAdvice} />
    </div>
  );
};

export default Board;
