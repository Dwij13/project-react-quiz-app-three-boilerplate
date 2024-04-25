import React from "react";
import { useLocation,NavLink } from "react-router-dom";
import "./ResultComponent.css";

const ResultComponent = () => {
  const { state } = useLocation();

  const score = state.score;
  const attemptedCount = state.attempted.length;
  const percentage = Math.round((score / 15) * 100);

  const getMessage = () => {
    if (score < 6) return "You need more practice!";
    if (score < 11) return "Good job! You can do better!";
    return "Great job! Keep it up!";
  };

  return (
    <div className="result-div">
      <h1>Result</h1>
      <div className="result">
        <div>
          <p className="message1">{getMessage()}</p>
        </div>
        <div>
          <h1 className="score">Your score is {percentage}%</h1>
        </div>
        <div className="number-div">
          <p className="para">
            Total number of Questions <span className="number">15</span>{" "}
          </p>
          <p className="para">
            Number of attempted questions{" "}
            <span className="number">{attemptedCount}</span>{" "}
          </p>
          <p className="para">
            Number of correct answers <span className="number">{score}</span>
          </p>
          <p className="para">
            Number of wrong answers{" "}
            <span className="number">{attemptedCount - score}</span>{" "}
          </p>
        </div>
      </div>
      <div>
      <NavLink to={"/quiz"}>

        <button >Play Again</button>
      </NavLink>
      <NavLink to={"/"}>
        
        <button >Back to home</button>
      </NavLink>
      </div>
    </div>
  );
};

export default ResultComponent;
