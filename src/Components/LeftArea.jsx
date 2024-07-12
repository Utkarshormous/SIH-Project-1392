import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";

const Questions = [
  {
    ques: "1. Are you able to make and receive calls?",
    detail: "Check your device for cellular network connectivity issues.",
  },
  {
    ques: "2. Is your device's touch screen working properly?",
    detail: "Check the touch screen functionality of your phone.",
  },
  {
    ques: "3. Is your phone's screen original?",
    detail:
      "Pick 'Yes' if the screen was never changed or was changed by the Authorized Service Center. Pick 'No' if the screen was changed at a local shop.",
  },
];

function LeftArea() {
  const [selectedOptions, setSelectedOptions] = useState(
    Questions.map(() => null)
  );

  const handleOptionChange = (index, label) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = label;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <Bigdiv>
      <NavArea></NavArea>
      <Tellme>
        <h1>Tell Something More About Your Device?</h1>
      </Tellme>
      <HeadingArea>
        {Questions.map((question, index) => (
          <QuestionArea key={index}>
            <h3>{question.ques}</h3>
            <p>{question.detail}</p>
            <ButtonArea>
              <Button
                label="Yes"
                isChecked={selectedOptions[index] === "Yes"}
                onChange={() => handleOptionChange(index, "Yes")}
              />
              <Button
                label="No"
                isChecked={selectedOptions[index] === "No"}
                onChange={() => handleOptionChange(index, "No")}
              />
            </ButtonArea>
          </QuestionArea>
        ))}
        <button>
          <h3>Continue</h3>
        </button>
      </HeadingArea>
    </Bigdiv>
  );
}

export default LeftArea;

const Bigdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  font-family: Inter, system-ui, sans-serif;
  font-weight: 500px;
  line-height: 1.5rem;
  height: 100vh;
  background-color: rgb(225, 235, 223);
`;

const QuestionArea = styled.div`
  width: 600px;
  margin-top: 40px;
  p {
    color: grey;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeadingArea = styled.div`
  border-radius: 20px;
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 50px;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: 0px 0px 32px -4px rgba(0, 0, 0, 0.75);
  button {
    display: flex;
    width: 150px;
    height: 30px;
    align-items: center;
    padding-left: 40px;
    cursor: pointer;
    color: rgb(79, 183, 73);
    margin-top: 30px;
    border-radius: 5px;
    border: 2px solid rgb(79, 183, 73);
    transition: 400ms;

    &:hover {
      color: white;
      background-color: rgb(79, 183, 73);
      border: 2px solid rgb(225, 235, 223);
      transform: scale(1.2);
    }
  }
`;

const Tellme = styled.div`
  padding: 20px;
  color: rgb(79, 183, 73);
  border-bottom: 2.5px solid rgb(79, 183, 73);
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const NavArea = styled.div`
  position: absolute;
  height: 100px;
  top: 0px;
  left: 0;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgb(79, 183, 73),
    rgb(79, 183, 73, 0.5)
  );
`;
