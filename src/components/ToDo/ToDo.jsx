import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
export default function ToDo() {
  const [newTodo, setNewTodo] = useState([]);
  const handleNewTask = () => {
    setNewTodo([
      ...newTodo,
      {
        id: newTodo.length - 1,
        title: document.getElementById("newTask").value,
      },
    ]);
    document.getElementById("newTask").value = "";
  };
  const handleDeleteTask = (id) => {
    setNewTodo(newTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-xl text-white font-bold">ToDo List</h1>
      {newTodo.map((todo) => {
        return (
          <ul className="list-none">
            <li
              key={todo.id}
              className="text-white flex justify-between items-center bg-rose-700 p-2 rounded-md"
            >
              {todo.title}{" "}
              <FaRegTrashCan
                className="cursor-pointer"
                onClick={() => {
                  handleDeleteTask(todo.id);
                }}
              />
              <FaPenToSquare className="cursor-pointer" />
            </li>
          </ul>
        );
      })}

      <input className="focus-outline-none p-2 rounded-md" id="newTask" />
      <button
        className="bg-yellow-300 cursor-pointer  h-8 rounded-sm "
        onClick={handleNewTask}
      >
        + Add new Task
      </button>
    </div>
  );
}
