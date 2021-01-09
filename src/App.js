import React, { useReducer, useState, useEffect } from "react";
import "./styles.css";
import Sections from "./components/page/Sections";
import { UserContext } from "./components/UserContext";
import Progress from "./components/page/Progress";

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return { ...state, currentPage: state.currentPage + 1 };
    case "previous":
      return { ...state, currentPage: state.currentPage - 1 };
    case "fetched":
      return { ...state, totalPages: action.data };
    case "summary":
      return { ...state, summaryPage: action.data };
    default:
      return state;
  }
};

export default function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [formAnswers, setAnswer] = useState({});
  const [{ currentPage, totalPages, summaryPage }, dispatch] = useReducer(reducer, {
    totalPages: 0,
    currentPage: 0,
    summaryPage: false 
  });
  const [summary, setSummary] = useState({
    PageID: 123,
    Sections: [],
    Name: "Summary",
    Label: "Confirmation",
    NextPageId: 0,
    Outlet: null,
    Validation: null,
    Priority: 1,
    CreatedBy: 0,
    isActive: true,
    Email: "",
    SelectedRBtn: []
  });

  useEffect(() => {
    fetch("data/form.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        dispatch({ type: "fetched", data: data.length });
        setLoaded(true);
        return data;
      });
  }, []);

  const handlePrevious = () => {
      if(summaryPage){
        dispatch({ type: "summary", data: false })
      } else {
        dispatch({ type: "previous" });
      }
  };

  const handleNext = () => {
    if(summaryPage){
      console.log('subbmitted');
      return false;
    }
    if (currentPage < totalPages - 1) {
      dispatch({ type: "next" });
    } else {
      dispatch({ type: "summary", data: true })
    }
  };
  const summaryPageContent = (
    <>
    { data.map(page=><Sections page={page} />) }
    </>
  )
  const nextPageContent = summaryPage ? 'submit' : 'next';
  const prevPageContent = summaryPage ? 'change again' : 'prev';
  return !isLoaded ? <h5>Loading</h5> : (
    <div>
      <div className="App">
        <UserContext.Provider
          value={{
            data,
            setData,
            currentPage,
            dispatch,
            totalPages,
            setSummary,
            summaryPage,
            summary,
            formAnswers,
            setAnswer
          }}
        >
          <div className="progress"><Progress /></div>
          {summaryPage ? summaryPageContent : <Sections page={data[currentPage]} />}
        </UserContext.Provider>
      </div>
        <div className="btns">
            <button disabled={!currentPage} className="btn btn-primary" onClick={handlePrevious}>{prevPageContent}</button>
            <button className="btn btn-primary" onClick={handleNext}>{nextPageContent}</button>
        </div>
    </div>
  );
}
