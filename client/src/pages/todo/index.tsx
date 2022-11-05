import Todo from "../../components/todo";
import { ITodo } from "../../interfaces/todo.interface";

const TodoList = () => {
  const todo: ITodo[] = [
    {
      id: 7,
      name: "sleep",
      complete: false,
    },
    {
      id: 8,
      name: "kick",
      complete: false,
    },
    {
      id: 9,
      name: "love",
      complete: false,
    },
  ];
  return (
    <div>
      {todo.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
