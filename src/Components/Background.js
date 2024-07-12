import React, { useState } from "react";
import Earth from "../images/Earth.png";
import "./Background.css";
import Mobile from "./MobileArea";
import Stars from "../images/gary-scott-YvRTYzkT6Hs-unsplash.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Satellite from "../images/Satellite.png";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Card from "./Cards";
function Background() {
  return (
    <>
      <Container>
        <Parallax pages={7}>
          <Item1>
            <img src={Stars} />
          </Item1>
          <ParallaxLayer
            offset={0}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <Item2>
              <img src={Earth} />
            </Item2>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.8}
            style={{ pointerEvents: "none" }}
          >
            <Item3>
              <img src={Satellite} />
            </Item3>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={-0.1}
            style={{ pointerEvents: "none" }}
          >
            <Quote>
              Locate E-waste spots with grace, Shop for treasures in an
              <Temp>eco-friendly space</Temp>
            </Quote>
          </ParallaxLayer>
          <ParallaxLayer offset={1.5}>
            <PincodeArea>
              <Form1>
                <Heading>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Search with pincode")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Explore E-waste facility near you")
                        .start();
                    }}
                  />
                </Heading>
                <input
                  type="text"
                  className="Input"
                  placeholder="Enter your Pincode"
                />
                <a href="/Locator">
                  <input type="button" className="Search" value="Search" />
                </a>
              </Form1>
            </PincodeArea>
          </ParallaxLayer>
          <ParallaxLayer offset={3}>
            <MobileArea>
              <Mobile />
            </MobileArea>
          </ParallaxLayer>
          <ParallaxLayer offset={4}>
            <CardArea>
              <Card />
            </CardArea>
          </ParallaxLayer>
        </Parallax>
      </Container>
    </>
  );
}

export default Background;
const Container = styled.div`
  left: -50vw;
  width: 200vw;
`;
const Item1 = styled.div`
  position: absolute;
  top: -300px;
  img {
    width: 100%;
    height: 150%;
  }
`;
const Item2 = styled.div`
  position: absolute;
  left: -450px;
  top: 100px;
  transition: 200ms;
  img {
    width: 120%;
    height: 120%;
  }
`;
const Item3 = styled.div`
  height: 250px;
  width: 250px;
  position: absolute;
  top: 1000px;
  left: 1200px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Quote = styled.div`
  color: rgb(79, 183, 73);
  font-size: 60px;
  top: 100px;
  text-shadow: 4px 4px 5px black;
  left: 250px;
  position: absolute;
  text-align: center;
  font-family: "Nunito", sans-serif;
  max-width: 1000px;
`;
const Temp = styled.div`
  color: white;
`;
const PincodeArea = styled.div`
  position: absolute;
  padding: 40px;
  left: 500px;
  font-family: "Nunito", sans-serif;
  top: 250px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 60px;
  color: white;
  border-radius: 50px;
`;
const Form1 = styled.div``;
const Heading = styled.div`
  font-size: 30px;
`;
const CardArea = styled.div`
  position: absolute;
  top: 110vh;
`;
const MobileArea = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
`;
