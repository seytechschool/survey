import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

export default function Radiobtn(props) {
  const { summaryPage, formAnswers, setAnswer } = useContext(UserContext);
  const { Label, Options, UI, SectionID } = props.data;
  const selectedValue = formAnswers[SectionID] || '';
  const handleChange = (e) => {
    const allAnswers = {...formAnswers};
    allAnswers[SectionID] = e.target.value;
    setAnswer(allAnswers)
  };

  return (
    <>
      <h5>{Label}</h5>
      <div className="question">
        {Options.map((radio) => {
          const { Value, QuestionOptionID } = radio;
          return (
            <label key={QuestionOptionID} htmlFor={QuestionOptionID}>
              <input
                onChange={handleChange}
                type="radio"
                id={QuestionOptionID}
                name={UI}
                disabled={summaryPage}
                value={Value}
                checked={selectedValue === Value}
              />
              {Value}
            </label>
          );
        })}
      </div>
    </>
  );
}
