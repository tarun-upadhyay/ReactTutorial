import React, { useState } from "react";

export default function Todo() {
  //useState(initalstate)
  //it will return an array
  //array[0] = currentValue
  //array[1] = function (that is used to change the state of current value)
  const [inputVal, setInputval] = useState("");

  const [todo, setTodo] = useState(["Eat", "Sleep", "Play"]);

  const changeMyName = () => {

    setTodo([...todo, inputVal]);
    setInputval("");
  };
  function handleChange(event) {
    setInputval(event.target.value);
  }

  return (
    <>
      <h1>This is Todo</h1>
      <div style={{ margin: "auto", width: "50%", marginTop: "20px" }}>
        <input
          id="todo"
          value={inputVal}
          onChange={handleChange}
          type="text"
          placeholder="Enter your Todo"
        />
        <button onClick={changeMyName}>Submit</button>
        <br />
        {todo.map((todo, index) => (
          <h1 key={index}>{todo}</h1>
        ))}
      </div>
    </>
  );
}
