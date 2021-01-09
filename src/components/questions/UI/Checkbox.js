import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

export default function Checkbox(props) {
  const { summaryPage, formAnswers, setAnswer } = useContext(UserContext);
  const { Label, QuestionID } = props.data;
  const checked = formAnswers[QuestionID] || false;
  const handleClick = (e) => {
    const allAnswers = {...formAnswers};
    allAnswers[QuestionID] = e.target.checked;
    setAnswer(allAnswers)
  };

  return (
    <div className="question">
      <input
        onClick={(e) => handleClick(e)}
        type="checkbox"
        id={QuestionID}
        name={Label}
        disabled={summaryPage}
        value={Label}
        checked={checked}
      />
      <label htmlFor={QuestionID}> {Label} </label>
    </div>
  );
}
