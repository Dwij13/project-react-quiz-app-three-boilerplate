import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizComponent.css";
import questions from "./../questions/Questions";

const QuizComponent = () => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const navigate = useNavigate();

  const nextQuestion = () =>
    setNum((prevNum) => (prevNum < questions.length - 1 ? prevNum + 1 : prevNum));
  const previousQuestion = () =>
    setNum((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
  const onSelectOption = (e) => {
    const selectedAnswer = e.currentTarget.innerText;
    const isCorrect = selectedAnswer === questions[num].answer;
    alert(isCorrect ? "Correct answer" : "Incorrect answer");

    if (!attempted.includes(num)) {
      setAttempted((prevAttempted) => [...prevAttempted, num]);
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    }

    nextQuestion();
  };

  const finishQuiz = () =>
    navigate("/Result", { state: { score, attempted } });

  const quitQuiz = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      navigate("/"); // Navigate to home or wherever you want
    }
  };

  return (
    <div className="quiz-box">
      <div>
        <h2>Questions</h2>
      </div>
      <div className="pages">
        <p>
          <span>{num + 1}</span> of {questions.length}
        </p>
      </div>
      <div>
        <p>{questions[num].question}</p>
      </div>
      <div className="option-box">
        <div className="option" onClick={onSelectOption}>
          {questions[num].optionA}
        </div>
        <div className="option" onClick={onSelectOption}>
          {questions[num].optionB}
        </div>
      </div>
      <div className="option-box">
        <div className="option" onClick={onSelectOption}>
          {questions[num].optionC}
        </div>
        <div className="option" onClick={onSelectOption}>
          {questions[num].optionD}
        </div>
      </div>
      <div className="button">
        <div className="button-box">
          <button onClick={previousQuestion}>Previous</button>
          <button onClick={nextQuestion}>Next</button>
          <button onClick={quitQuiz}>Quit</button>
          <button onClick={finishQuiz}>Result</button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
