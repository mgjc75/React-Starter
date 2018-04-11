import React from "react";
import Task from "./task";

function Checklist({ tasks, removeTask, toggleCompleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => {
        return (
          <Task
            task={task}
            key={`${index}${task}`}
            removeTask={removeTask}
            toggleCompleteTask={toggleCompleteTask}
          />
        );
      })}
    </ul>
  );
}

export default Checklist;
