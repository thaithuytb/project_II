import { ITodo } from "../../interfaces/todo.interface";
import "./todo.css";

const Todo = ({ todo }: { todo: ITodo }) => {
  return (
    <div className="todo">
      <div>{todo.id}</div>
      <div>{todo.name}</div>
      <div>{todo.complete}</div>
    </div>
  );
};

export default Todo;
