import React from "react";
import styled from "styled-components";
import logo from "../Logo/logo.png";
function NavBar() {
  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <OptionGroup>
        <a href="/">
          <Option>Home</Option>
        </a>
        <a href="/store">
          <Option>Store</Option>
        </a>
        <a href="/sell">
          <Option>E-waste Assesment</Option>
        </a>
        <Option>Blogs</Option>
        <Login>
          <a href="/signin">Login</a>
        </Login>
      </OptionGroup>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgb(5, 8, 25),
    rgba(5, 8, 25, 0.3)
  );
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 20px;
  img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
`;
const OptionGroup = styled.div`
  display: flex;
`;

const Option = styled.div`
  color: white;
  padding: 10px;
  margin: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  transition: 500ms;
  &:hover {
    background-color: green;
    transform: translateY(-5px);
  }
`;
const Login = styled.div`
  color: white;
  padding: 10px 20px;
  font-family: "Nunito", sans-serif;
  margin: 0 100px;
  border-radius: 5px;
  cursor: pointer;
  transition: 500ms;
  border: solid 1px white;
  &:hover {
    background-color: white;
    color: rgb(0, 128, 0);
    transform: scale(1.2);
  }
`;
