import { useState } from "react";

const NewTodoForm = ({ add }) => {
  const [formData, setFormData] = useState({
    task: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    add(formData);
    setFormData({ task: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            onChange={handleChange}
            type="text"
            name="task"
            value={formData.task}
            id="task"
          />
        </div>
        <button>Add!</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
