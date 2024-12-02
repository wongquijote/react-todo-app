import React, { useState } from "react";

const Tabs = (props) => {
    const { todos, selectedTab, setTab } = props;
//   const todos = [
//     {input: '', complete: true},
//     {input: '', complete: true},
//     {input: '', complete: false},
//     {input: '', complete: false},
//   ]

  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="navbar">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button className={"tab-button " + (tab === selectedTab ? ' tab-selected' : '')} key={tabIndex} onClick={() => setTab(tab)}>
            <h4>{tab}</h4>
            <span>({numOfTasks})</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
