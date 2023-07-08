import React from "react";

function TodoInput({ handleData, setItem, item }) {
  return (
    <>
      <div className="mt-5 inputandbtn">
        <div className="input-group mb-3">
          <input
            style={{ backgroundColor: "lightblue" }}
            type="text"
            className="form-control"
            placeholder="Enter your Todos"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-info btn-outline-secondary ms-3"
              type="button"
              onClick={handleData}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoInput;
