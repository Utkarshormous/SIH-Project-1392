import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import Ewaste from "../Json Files/Ewaste";
import Fade from "react-reveal/Fade";
function Sell() {
  //all the variables for forms
  const [EwasteValue, SetEwasteValue] = useState("");
  const [BrandValue, SetBrandValue] = useState("");
  const [modelSelect, setModelSelect] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const [obj1, setobj1] = useState({});
  const [obj2, setobj2] = useState({});
  const [obj3, setobj3] = useState({});
  const [ModelList, setModelList] = useState([]);
  const [ModelValue, setModelValue] = useState("");
  const [finalStatus, setFinalStatus] = useState(false);
  const [keys, setkeys] = useState([]);
  const Ewastedata = [];

  Ewaste.map((ele) => Ewastedata.push(ele.name));
  Ewastedata.push("N/A");

  useEffect(() => {
    if (EwasteValue !== "") {
      const tempObj = Ewaste.find(({ name }) => name === EwasteValue);
      setobj1(tempObj);
    }
  }, [EwasteValue]);

  useEffect(() => {
    if (obj1.refurbishment === "yes") {
      setModelSelect(true);
      const brands = obj1.company.map((ele) => ele.name);
      setFinalStatus(false);
      setBrandList(brands);
    } else if (obj1.refurbishment === "no") {
      setFinalStatus(true);
      setModelSelect(false);
    } else {
      setFinalStatus(false);
      setModelSelect(false);
    }
  }, [obj1]);

  useEffect(() => {
    if (BrandValue != "") {
      const tempObj = obj1.company.find(({ name }) => name === BrandValue);
      setobj2(tempObj);
    }
  }, [BrandValue]);
  useEffect(() => {
    if (BrandValue !== "") {
      const Models = obj2.models.map((ele) => ele.name);
      setModelList(Models);
    }
  }, [obj2]);
  useEffect(() => {
    if (ModelValue != "") {
      const tempObj = obj2.models.find(({ name }) => name === ModelValue);
      setobj3(tempObj);
      setFinalStatus(true);
    }
  }, [ModelValue]);

  useEffect(() => {
    if (finalStatus === true) {
      const tempMatrix = Object.keys(obj3.specs);
      setkeys(tempMatrix);
    }
  }, [obj3, finalStatus]);

  return (
    <Container1>
      <NavBarHelp></NavBarHelp>
      <Heading>PROVIDE DETAILS ABOUT YOUR PRODUCT</Heading>
      <SubContainer>
        {finalStatus && (
          <Fade bottom>
            <InformationArea>
              <Title>Detailed Information</Title>
              <ImageArea>
                <img src={obj3.url} />
              </ImageArea>
              <Content>
                <Name>
                  <Brand>Brand: {obj2.name}</Brand>
                  <Model>Model: {obj3.name}</Model>
                  <SpecsArea>
                    {keys.map((ele) => {
                      return (
                        <Group>
                          <LabelArea>{ele}: </LabelArea>
                          <Value>{obj3.specs[ele]}</Value>
                        </Group>
                      );
                    })}
                  </SpecsArea>
                </Name>
              </Content>
            </InformationArea>
          </Fade>
        )}
        <Main>
          <Info>
            <Context>Type of E-waste:</Context>
            <DropdownArea>
              <Dropdown
                data={Ewastedata}
                width={400}
                header={"Select One"}
                SetSelect={SetEwasteValue}
              />
            </DropdownArea>
          </Info>
          {modelSelect && (
            <>
              <Info>
                <Context>Brand:</Context>
                <DropdownArea>
                  <Dropdown
                    data={brandList}
                    width={400}
                    header={"Select One"}
                    SetSelect={SetBrandValue}
                  />
                </DropdownArea>
              </Info>
              <Info>
                <Context>Model:</Context>
                <DropdownArea>
                  <Dropdown
                    data={ModelList}
                    width={400}
                    header={"Select One"}
                    SetSelect={setModelValue}
                  />
                </DropdownArea>
              </Info>
            </>
          )}
          {finalStatus && <a href="/ConditionCheck" ><Submit>Submit</Submit></a>}
        </Main>
      </SubContainer>
    </Container1>
  );
}

export default Sell;
const Container1 = styled.div`
  background-color: rgb(225, 235, 223);
  font-family: "Nunito", sans-serif;
  height: 115vh;
`;
const NavBarHelp = styled.div`
  height: 100px;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgb(79, 183, 73),
    rgb(79, 183, 73, 0.5)
  );
`;
const Heading = styled.div`
  font-size: 35px;
  margin-top: 50px;
  text-align: center;
  color: rgb(79, 183, 73);
  border-bottom: 2px solid;
`;
const DropdownArea = styled.div``;
const Context = styled.div``;
const Info = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
`;
const Main = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Submit = styled.div`
  position: relative;
  top: 40px;
  padding: 10px;
  height: 20px;
  margin: 10px;
  color: rgb(79, 183, 73);
  border-radius: 5px;
  border: 2px solid rgb(79, 183, 73);
  transition: 400ms;
  cursor: pointer;
  z-index: 0;
  &:hover {
    color: white;
    background-color: rgb(79, 183, 73);
    border: 2px solid rgb(225, 235, 223);
    transform: scale(1.2);
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 25px;
`;

const InformationArea = styled.div`
  color: rgb(79, 183, 73);
  font-size: 25px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  padding: 30px;
  background-color: white;
  box-shadow: 0px 0px 32px -4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  height: 500px;
`;
const ImageArea = styled.div`
  width: 350px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  font-size: 15px;
`;
const Name = styled.div``;
const Brand = styled.div``;
const Model = styled.div``;
const SpecsArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelArea = styled.div``;
const Value = styled.div`
  margin-left: 5px;
`;
const Group = styled.div`
  display: flex;
`;
