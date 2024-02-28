


import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Pagination = ({ tableDataArr = [], updateTableDataArr }) => {

  const PageSize = 25; // Number of items to display per page
  const IntervalSize = 25; // Number of years per interval
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalIntervals, setTotalIntervals] = useState(1);
  const [tabCount, updateTabCount] = useState(3);
  const [data, updateData] = useState(tableDataArr);

  const dark = useSelector((state) => state.home.dark);

  const totalPages = Math.ceil(data.length / PageSize);

  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = Math.min(startIndex + PageSize - 1, data.length - 1);

  // Get the current page of data
  const currentPageData = data.slice(startIndex, endIndex + 1);

  const nextPage = () => {
    const dd= totalIntervals-3

    console.log("totalIntervals", totalIntervals)
    console.log("tabCount", tabCount)

    if (dd !==tabCount) {
       updateTabCount(tabCount + 1)
    }
    updateTableDataArr(currentPageData)
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    updateTableDataArr(currentPageData)
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleTabClick = async (tabNumber, changeType) => {
    let newStartIndex, newEndIndex;
  
    if (changeType === 1) {
      // Moving to next set of tabs
      newStartIndex = (tabNumber - 1) * PageSize;
      newEndIndex = Math.min(newStartIndex + PageSize - 1, data.length - 1);
    } else {
      // Moving to previous set of tabs
      newEndIndex = (tabNumber * PageSize) - 1;
      newStartIndex = Math.max(newEndIndex - PageSize + 1, 0);
    }
  
    await setCurrentPage(tabNumber);
    await updateTableDataArr(data.slice(newStartIndex, newEndIndex + 1));
  
    if (tabNumber >= 3 && changeType === 1 && totalIntervals - 3 !== tabNumber) {
      await updateTabCount(tabNumber + 1);
    }
  };
  

  // const handleTabClick = async (tabNumber, changeType) => {

  //   console.log("start", startIndex)
  //   console.log("endIndex", endIndex)

  //   await setCurrentPage(tabNumber);
  //   await updateTableDataArr(currentPageData)
  //   const dd= totalIntervals-3

  //   if (tabNumber >= 3 && changeType === 1 && dd !==tabNumber) {
  //     await updateTabCount(tabNumber + 1)
  //   }
  // };

  useEffect(() => {
    setTotalIntervals(Math.ceil(data.length / IntervalSize));
    updateTableDataArr(currentPageData)
  }, [data]);


  const renderTabs = () => {
    const tabs = [];
    // First three tabs
    for (let i = 1; i <= tabCount; i++) {
      tabs.push(
        <p
          key={i}
          style={{
            color: dark ? "#fff" : "#000",
          }}
          onClick={() => handleTabClick(i, 1)}
          className={`border-[1px] text-[15px] border-[#EBEBEB] rounded-[3px] px-[15px] py-[8px] flex justify-center items-center cursor-pointer ${currentPage === i ? "bg-[#2fe49c]" : ""}`}
        >
          {i}
        </p>
      );
    }
    // Dots
    if (totalIntervals > tabCount) {
      tabs.push(<div style={{
        display: "flex",
        justifyContent: "end",
        padding: "10px",
        color: dark ? "#fff" : "#000",

      }} className='flex justify-center items-center'>
        ...
      </div>);
    }
    // Last three tabs
    for (let i = totalIntervals - 2; i <= totalIntervals; i++) {
      tabs.push(
        <p
          key={i}
          style={{
            color: dark ? "#fff" : "#000",
          }}
          onClick={() => handleTabClick(i, 2)}
          className={`border-[1px] text-[15px] border-[#EBEBEB] rounded-[3px] px-[15px] py-[8px] flex justify-center items-center cursor-pointer ${currentPage === i ? "bg-[#2fe49c]" : ""}`}
        >
          {i}
        </p>
      );
    }
    return tabs;
  };

  return (

    <div className='flex' style={{
      display: "flex",
      justifyContent: "end",
      paddingTop: "10px",
      paddingRight: "10px",
      alignItems: "center",
      overflow: "auto"
    }}>
      <p style={{
        color: dark ? "#fff" : "#000",
      }} className='border-[1px] h-[40px] cursor-pointer text-[15px] border-[#EBEBEB] rounded-[3px] px-[15px] py-[8px] flex justify-center items-center' onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </p>
      <div className="tabs flex justify-center items-center">
        {renderTabs()}
      </div>
      <p style={{
        color: dark ? "#fff" : "#000",
      }} className='border-[1px] h-[40px] text-[15px] cursor-pointer border-[#EBEBEB] rounded-[3px] px-[15px] py-[6px] flex justify-center items-center' onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </p>
    </div>

  );
};

export default Pagination;
