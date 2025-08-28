import React from "react";

const Todo = ({ todoName, todoDate }) => {
  return (
    <div>
      <div>
        <div
          className="container text-center"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div className="row">
            <div className="col-4">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
