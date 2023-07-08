import React, { useState } from "react";
import TodoHeading from "./Components/TodoHeading";
import TodoInput from "./Components/TodoInput";
import TodoOutputs from "./Components/TodoOutputs";
import TodoDeleteAll from "./Components/TodoDeleteAll";

function TodoApp() {
  const [item, setItem] = useState("");
  const [arr, setArr] = useState([]);

  //   funtion to handle data

  const handleData = () => {
    if (!item) {
    } else {
      setArr([...arr, item]);
      setItem("");
    }
  };

  // funtion to Delete

  const handleDelete = (id) => {
    const filteredArr = arr.filter((e, i) => {
      return id !== i;
    });
    setArr(filteredArr);
  };

  // funtion to Edit

  const handleEdit = (element, index) => {
    const updatedArr = [...arr];
    const editedValue = prompt("Edit your value here");
    updatedArr[index] = editedValue;

    setArr(updatedArr);
  };

  // funtion to delete all

  const hanleDeleteAll = () => {
    setArr([]);
  };

  return (
    <div
      className=" container card paper shadow mt-5"
      style={{ backgroundColor: "#FFECCC" }}
    >
      <TodoHeading />
      <TodoInput handleData={handleData} setItem={setItem} item={item} />
      <TodoOutputs
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        arr={arr}
        setArr={setArr}
      />
      <TodoDeleteAll hanleDeleteAll={hanleDeleteAll} arr={arr} />
    </div>
  );
}

export default TodoApp;
