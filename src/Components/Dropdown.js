import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Dropdown({ data, width, header, select, SetSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const optionArr = data;
  const index = optionArr.length;
  const [value, setValue] = useState(header);
  const ClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container width={width}>
      <Header
        onClick={() => {
          ClickHandler();
        }}
        width={width}
      >
        <TextH>{value}</TextH>
        <ArowArea reverse={isOpen}>
          <ArrowDropDownIcon />
        </ArowArea>
      </Header>
      {isOpen && (
        <OptionArea width={width} index={index}>
          {optionArr.map((ele) => {
            return (
              <Option
                onClick={() => {
                  setValue(`${ele}`);
                  setIsOpen(false);
                  SetSelect(`${ele}`);
                }}
                width={width}
              >
                {ele}
              </Option>
            );
          })}
        </OptionArea>
      )}
    </Container>
  );
}

export default Dropdown;
const Container = styled.div`
  font-family: "Nunito", sans-serif;
  width: ${(props) => props.width + 14}px;
`;
const Header = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.4);
  height: 35px;
  z-index: 100;
  width: ${(props) => props.width}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  cursor: pointer;
`;
const TextH = styled.div``;
const OptionArea = styled.div`
  height: 300px;
  position: absolute;
  z-index: 100;
  overflow-y: scroll; /* Always show a scrollbar for scrolling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* Make the scrollbar transparent */

  /* Hide WebKit-based scrollbars */
  &::-webkit-scrollbar {
    width: 6px; /* Adjust the width as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Make the thumb transparent */
  }
`;
const Option = styled.div`
  color: black;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: white;
  height: 35px;
  width: ${(props) => props.width}px;
  padding: 7px;
`;
const ArowArea = styled.div`
  transition: 300ms;
  transform: rotate(${(props) => (props.reverse ? "180" : "0")}deg);
`;
