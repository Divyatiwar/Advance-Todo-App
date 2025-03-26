import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import { FaTrash } from "react-icons/fa";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => dispatch(deleteTask(task.id))}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
