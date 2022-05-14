import React from "react";
const style = {
  backgroundcolor: "aqua",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderradius: "30px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style} className="input_area">
      <input
        disabled={disabled}
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
