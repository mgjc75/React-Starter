import React from "react";
import "../css/task.css";

function Task({ task, removeTask, toggleCompleteTask }) {
  return (
    <li className="list-group-item">
      <h4
        className="list-group-item-heading"
        onClick={() => toggleCompleteTask(task)}
      >
        <label
          className={
            task.completed ? "label-text-strike lb-md" : "label-text lb-md"
          }
        >
          {task.text}
        </label>
      </h4>
      <div className="list-group-item-text">
        <span className="label label-success lb-md category-default ">
          {task.category}
        </span>
        <span
          className="badge badge-info pull-right"
          onClick={() => removeTask(task)}
        >
          X
        </span>
      </div>
    </li>
  );
}

export default Task;
