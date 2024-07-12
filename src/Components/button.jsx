import React from "react";
import styled from "styled-components";

function Button({ label, isChecked, onChange }) {
  const handleButtonClick = () => {
    onChange(label);
  };

  return (
    <Radiobutton isChecked={isChecked} onClick={handleButtonClick}>
      <input  type="radio" checked={isChecked} readOnly />
      <p>{label}</p>
    </Radiobutton>
  );
}

export default Button;

const Radiobutton = styled.div`
  display:flex;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: ${(props) => (props.isChecked ? "1px solid green" : "1px solid #e5e7eb")};
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  background-color: white;
  color: ${(props) => (props.isChecked ? "white" : "green")};
  margin-right:20px;
  input[type='radio']{
    accent-color:green;
  }
  p{
    color:black;
  }
`;
