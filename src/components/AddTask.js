export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.name !== undefined && task.name.length > 0) {
      let date = new Date();
      let newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      if (task.id) {
        let updatedTaskList = taskList.map((todo) =>
          todo.id === task.id ? newTask : todo
        );
        setTaskList(updatedTaskList);
      } else {
        setTaskList([...taskList, newTask]);
      }
    }
    setTask({});
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(event) => setTask({ ...task, name: event.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
