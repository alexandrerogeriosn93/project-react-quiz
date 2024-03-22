import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import GameOver from "./components/GameOver";
import Question from "./components/Question";
import Welcome from "./components/Welcome";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTION" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
