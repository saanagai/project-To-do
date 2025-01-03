import styles from "./styles/task.module.css";

const Tasks = ({ todos }) => {
  function deleteHandler(index) {
    const userConfirmed = confirm("are you sure you want to deletetis task ?");
    if (userConfirmed) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
    const handleCheckBox = (index) => {
      todos[index].isCpmpleted = !todos[index].isCpmpleted;
      setTodos(todos);
      console.log(todos);
    };
  }
  return (
    <div className={styles.newTodo}>
      {todos.map((todo, index) => {
        return (
          <div className={styles.todoFlex}>
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <p key={index}>{todo}</p>;
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
