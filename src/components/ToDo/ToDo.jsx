import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";

export default function ToDo() {
  const [newTodo, setNewTodo] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleNewTask = () => {
    const taskTitle = document.getElementById("newTask").value.trim();
    if (taskTitle) {
      setNewTodo([
        ...newTodo,
        {
          id: newTodo.length,
          title: taskTitle,
        },
      ]);
      document.getElementById("newTask").value = "";
    }
  };

  const handleDeleteTask = (id) => {
    setNewTodo(newTodo.filter((todo) => todo.id !== id));
  };

  const handleEditTask = (id, title) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const handleSaveTask = (id) => {
    setNewTodo(
      newTodo.map((todo) =>
        todo.id === id ? { ...todo, title: editTitle } : todo
      )
    );
    setEditingId(null);
    setEditTitle("");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-xl text-white font-bold">ToDo List</h1>
      <ul className="list-none">
        {newTodo.map((todo) => {
          return (
            <li
              key={todo.id}
              className="text-white flex justify-between items-center bg-rose-700 p-2 rounded-md"
            >
              {editingId === todo.id ? (
                <>
                  <input
                    className="bg-rose-700 text-white rounded-md p-1"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button
                    className="ml-2 bg-green-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleSaveTask(todo.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{todo.title}</span>
                  <div className="flex gap-2">
                    <FaPenToSquare
                      className="cursor-pointer"
                      onClick={() => handleEditTask(todo.id, todo.title)}
                    />
                    <FaRegTrashCan
                      className="cursor-pointer"
                      onClick={() => handleDeleteTask(todo.id)}
                    />
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <input
        className="focus-outline-none p-2 rounded-md"
        id="newTask"
        placeholder="Add a new task"
      />
      <button
        className="bg-yellow-300 cursor-pointer  h-8 rounded-sm mt-2"
        onClick={handleNewTask}
      >
        + Add new Task
      </button>
    </div>
  );
}
