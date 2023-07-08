import React from "react";

function TodoDeleteAll({ hanleDeleteAll, arr }) {
  return (
    <>
      <div className="deleteAllbtn d-flex justify-content-center mt-5 mb-2 ">
        {arr[0] && (
          <button
            type="button"
            className="btn btn-danger btn-lg "
            onClick={hanleDeleteAll}
          >
            Delete All
          </button>
        )}
      </div>
    </>
  );
}

export default TodoDeleteAll;
