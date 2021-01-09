import React from "react";
import Checkbox from "./UI/Checkbox";
import Radiobtn from "./UI/Radiobtn";
import Textbox from "./UI/Textbox";

export function Questions({ eachQuestion }) {
  const {QuestionID, Label,UI} = eachQuestion;
  const map = {
    cb: <Checkbox data={eachQuestion} />,
    tb: <Textbox data={eachQuestion} />,
    rbil: <Radiobtn data={eachQuestion} />,
    lb: <div id={QuestionID} className="cb-label">{Label}</div>,
  }
  return map[UI] ? map[UI] : <div>Not a proper component type</div>
}
