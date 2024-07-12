import React, { useState, useEffect } from "react";
import styled from "styled-components";
import iPhone14 from "../images/Refusbished store/Iphone-14-PNG.png";
import AsusVivoBook15 from "../images/Refusbished store/AsusLaptop.webp";
import RedmiA4 from "../images/Refusbished store/imgbin_redmi-a4-ram-xiaomi-redmi-android-png.png";
import PowerBank from "../images/Refusbished store/MIpowerbank.png";
import BoatHeadphones from "../images/Refusbished store/boat headphones.jpg";
function ProductSlider() {
  const products = [
    {
      name: "Apple iPhone 14",
      image: iPhone14,
      price: "81,000",
      rating: 4.5,
    },
    {
      name: "Asus VivoBook 15",
      image: AsusVivoBook15,
      price: "73,000",
      rating: 4.8,
    },
    {
      name: "Redmi A4",
      image: RedmiA4,
      price: "2,100",
      rating: 3.7,
    },
    {
      name: "MI PowerBank 1000Mah",
      image: PowerBank,
      price: "4,000",
      rating: 3.7,
    },
    {
      name: "Boat Rockersz 550",
      image: BoatHeadphones,
      price: "700",
      rating: 4.8,
    },
    {
      name: "Apple iPhone 14",
      image: iPhone14,
      price: "81,000",
      rating: 4.5,
    },
    {
      name: "Asus VivoBook 15",
      image: AsusVivoBook15,
      price: "73,000",
      rating: 4.8,
    },
    {
      name: "Redmi A4",
      image: RedmiA4,
      price: "2,100",
      rating: 3.7,
    },
    {
      name: "MI PowerBank 1000Mah",
      image: PowerBank,
      price: "4,000",
      rating: 3.7,
    },
    {
      name: "Boat Rockersz 550",
      image: BoatHeadphones,
      price: "700",
      rating: 4.8,
    },
  ];

  const [CurrentIndex, SetCurrentIndex] = useState(0);
  const [VisibleLeft, SetVisibleLeft] = useState(true);
  const [VisibleRight, SetVisibleRight] = useState(false);
  const total = products.length;
  useEffect(() => {
    if (CurrentIndex <= 5 - total) {
      SetVisibleLeft(false);
    } else {
      SetVisibleLeft(true);
    }
    if (CurrentIndex == 0) {
      SetVisibleRight(false);
    }
    if (CurrentIndex <= -1 && CurrentIndex != 0) {
      SetVisibleRight(true);
    }
  }, [CurrentIndex]);
  const clickHandlerLeft = () => {
    SetCurrentIndex((prev) => prev - 1);
  };

  const clickHandlerRight = () => {
    SetCurrentIndex((prev) => prev + 1);
  };

  return (
    <Container>
      <Restrictor>
        <ButtonLeft
          display={VisibleLeft}
          onClick={() => {
            clickHandlerLeft();
          }}
        >
          {">"}
        </ButtonLeft>
        <ButtonRight
          display={VisibleRight}
          onClick={() => {
            clickHandlerRight();
          }}
        >
          {"<"}
        </ButtonRight>
        <CardArea index={CurrentIndex} total={total}>
          {products.map((ele) => {
            return (
              <Card>
                <Area1>
                  <Heading>{ele.name}</Heading>
                </Area1>
                <Area2>
                  <Image>
                    <img src={ele.image} />
                  </Image>
                </Area2>
                <Area3>
                  <Info>
                    <Price>Price: ₹{ele.price}</Price>
                    <Rating>Rating: {ele.rating}</Rating>
                  </Info>
                  <OrderNow>Order Now</OrderNow>
                </Area3>
              </Card>
            );
          })}
        </CardArea>
      </Restrictor>
    </Container>
  );
}

export default ProductSlider;
const Container = styled.div``;
const Restrictor = styled.div`
  overflow-x: hidden;
  width: 98.9vw;
  height: 600px;
`;
const CardArea = styled.div`
  transition: 500ms;
  transform: translateX(${(props) => 380 * props.index}px);
  margin-left: 50px;
  display: flex;
  gap: 30px;
  width:${(props) => props.total * 450}
  height: 600px;
`;
const Card = styled.div`
  position: relative;
  top: 30px;
  left: 30px;
  height: 480px;
  font-family: "Nunito", sans-serif;
  width: 380px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 32px -4px rgba(0, 0, 0, 0.75);
`;
const Area1 = styled.div``;
const Heading = styled.div`
  position: relative;
  top: 10px;
  left: 5px;
  font-size: 25px;
`;
const Area2 = styled.div``;
const Image = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  top: -20px;
  width: 300px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
const Area3 = styled.div`
  position: relative;
  top: -40px;
  display: flex;
  justify-content: space-around;
  width: 300px;
`;
const OrderNow = styled.div`
  padding: 10px;
  height: 20px;
  margin: 10px;
  border-radius: 5px;
  border: 2px solid rgb(79, 183, 73);
  transition: 400ms;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgb(79, 183, 73);
    border: 2px solid rgb(225, 235, 223);
    transform: scale(1.2);
  }
`;
const Info = styled.div`
  padding: 10px;
`;
const Price = styled.div``;
const Rating = styled.div``;
const ButtonLeft = styled.div`
  position: absolute;
  top: 350px;
  left: 1400px;
  padding: 7px 13px;
  border-radius: 50%;
  font-size: 25px;
  opacity: 0.5;
  color: rgb(90, 192, 84);
  cursor: pointer;
  display: ${(props) => (props.display ? "block" : "none")};
  transition: 300ms;
  &:hover {
    border: none;
    opacity: 0.8;
    color: white;
    background-color: rgb(90, 192, 84);
  }
  background-color: rgb(225, 235, 223);
  border: solid 3px rgb(90, 192, 84);
  z-index: 100;
`;
const ButtonRight = styled(ButtonLeft)`
  left: 60px;
`;
