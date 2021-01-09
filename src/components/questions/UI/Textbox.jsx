import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

export default function Textbox(props) {
  const { summaryPage, formAnswers, setAnswer } = useContext(UserContext);
  const { Label, QuestionID } = props.data;
  const value = formAnswers[QuestionID] || '';

  const handleInputChange = (e) => {
    const allAnswers = {...formAnswers};
    allAnswers[QuestionID] = e.target.value;
    setAnswer(allAnswers)
  };
  return (
    <div className="question textbox">
      <div> {Label} </div>
      <input
        type="textbox"
        value={value}
        disabled={summaryPage}
        placeholder="enter email..."
        onChange={handleInputChange}
      />
    </div>
  );
}
