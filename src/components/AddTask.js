export const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: event.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, newTask]);
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
