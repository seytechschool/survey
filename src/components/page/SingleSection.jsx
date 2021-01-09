import React from "react";
import { Questions } from "../questions/Questions";

export default function Section({ section }) {  
  return (
    <form>
      <div id={section.SectionID} className="single-section">
        <h4 className="label">{section.Label}</h4>
        <div className="questions-wrapper">
          {section.Questions.map((question) => ( 
            <Questions key={question.QuestionID} eachQuestion={question} />
          ))}
        </div>
      </div>
    </form>
  );
}
