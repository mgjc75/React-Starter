import React from "react";

function Task({ task, removeTask, toggleCompleteTask }) {
  return (
    <li className="list-group-item">
      <label
        className={task.completed ? "label-text-strike" : "label-text"}
        onClick={() => toggleCompleteTask(task)}
      >
        {task.text}
      </label>
      <button className="badge badge-info " onClick={() => removeTask(task)}>
        X
      </button>
    </li>
  );
}

export default Task;
