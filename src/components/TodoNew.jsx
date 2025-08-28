import React from "react";
import Todo from "./Todo";

const TodoNew = ({ itemsList }) => {
  return (
    <>
      <div className="items-container">
        {itemsList.map((item, index) => (
          <Todo key={index} todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default TodoNew;
