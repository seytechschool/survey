import React, { useContext } from "react";
import Section from "./SingleSection";
import { UserContext } from "../UserContext";

export default (props) => {
  const {summaryPage} = useContext(UserContext);
  const { Sections, Name } = props.page;
  return (
        <div>
          { !summaryPage && <h3 className="main-name">{Name}</h3> }
            {Sections.map((section) => {
                return <Section key={section.QuestionID} section={section} />;
            })}
        </div>
  );
};
