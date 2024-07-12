import React from "react";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";
import SearchIcon from "@mui/icons-material/Search";
import SmallCardArea from "./SmallCardArea";
function RefurbishRes() {
  return (
    <Container>
      <NavAdjust></NavAdjust>
      <SubContainer>
        <SearchArea>
          <SearchText />
          <SearchIconArea>
            <SearchIcon />
          </SearchIconArea>
        </SearchArea>
        <Gap />
        <Gap />
        <Gap />
        <ProductSlider />
        <SmallCardArea />
      </SubContainer>
    </Container>
  );
}

export default RefurbishRes;
const Container = styled.div`
  background-color: rgb(225, 235, 223);
  height: 290vh;
  width: 98.9vw;
`;
const NavAdjust = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100px;

  background-image: linear-gradient(
    to bottom,
    rgb(79, 183, 73),
    rgb(79, 183, 73, 0.5)
  );
`;
const SubContainer = styled.div`
  position: absolute;
  top: 100px;
`;
const SearchArea = styled.div`
  display: flex;
  position: absolute;
  padding: 20px;
  top: 40px;
  left: 500px;
`;
const SearchIconArea = styled.div`
  position: relative;
  left: -49px;
  top: 3px;
  height: 32px;
  padding: 0px 10px;
  padding-top: 6px;
  border-radius: 50%;
  background-color: rgb(79, 183, 73);
  cursor: pointer;
  transition: 100ms;
  &:hover {
    background-color: white;
    border: 3px solid rgb(79, 183, 73);
    transform: translateY(-2px) scale(0.9) translateX(-2px);
  }
`;

const SearchText = styled.input.attrs({
  type: "text",
  placeholder: "PRODUCT NAME",
})`
  border: 3px solid rgb(90, 192, 84);
  border-radius: 30px;
  padding-left: 40px;
  width: 340px;
  height: 40px;
`;
const Gap = styled.div`
  padding: 20px;
`;
