import React from "react";
import Task from "./task";

function Checklist({ todos, removeTask, toggleCompleteTask }) {
  return (
    <ul className="list-group">
      {todos.map((task, index) => {
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
