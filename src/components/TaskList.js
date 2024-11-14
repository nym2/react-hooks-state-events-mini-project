import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  // Function to remove a task by its text or unique identifier
  function handleDeleteTask(taskToDelete) {
    const updatedTasks = tasks.filter(task => task.text !== taskToDelete);
    setTasks(updatedTasks);
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

