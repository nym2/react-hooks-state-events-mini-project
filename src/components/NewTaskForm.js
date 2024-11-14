import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to manage form inputs
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || ""); // Default to first category after "All"

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);  // Pass the new task to the parent component
    setText("");                // Clear the text input
    setCategory(categories[1]); // Reset category selection
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((cat) => cat !== "All")
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
