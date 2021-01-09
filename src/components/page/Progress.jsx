import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Progress() {
  const { currentPage, totalPages, summaryPage } = useContext(UserContext);

  function percentage(partial, total) {
    const res = (100 * partial) / total;
    return Math.ceil(res);
  }

  const div = summaryPage ? 100 : percentage(currentPage, totalPages);
  return <div style={{ width: `${div}%` }} className="progress-div fill"/>
}
