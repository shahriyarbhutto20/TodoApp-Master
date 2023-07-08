import React from "react";

function TodoOutputs({ handleDelete, handleEdit, arr, setArr }) {
  return (
    <>
      <div className="container mt-3 ">
        {arr.map((element, index) => {
          return (
            <div className="d-flex justify-content-between " key={index}>
              <h3 className="ms-5">
                {`${index + 1} .  `}
                {element}
              </h3>
              <div className="me-5">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-success ms-1"
                    onClick={() => {
                      handleEdit(element, index);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoOutputs;
