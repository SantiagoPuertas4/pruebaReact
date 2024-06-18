import { useRef, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const $input = useRef();

  const handleNewTodo = () => {
    const nuevoTodo = $input.current.value;
    if (nuevoTodo.trim()) {
      const nuevoArreglo = [...todos, nuevoTodo];
      setTodos(nuevoArreglo);
      $input.current.value = "";
    }
  };
  return (
    <section>
      <fieldset>
        <label htmlFor="">Nueva tarea:</label>
        <input type="text" ref={$input} />
        <button onClick={handleNewTodo}>Cargar</button>
      </fieldset>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </section>
  );
};
export default TodoList;
