import React from "react";
import styled from "styled-components";
import iphone from "../images/Refusbished store/Iphone-14-PNG.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function SmallCardArea() {
  const data = [
    {
      catagory: "Mobile Phones",
      data: [
        {
          name: "Samsung Galaxy S21",
          year: 2021,
          price: "8,000",
          specs: {
            ram: "8 GB",
            memory: "128 GB",
          },
          description: "8 GB Ram 128GB Storage",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j_AeJgqHwb-1-ZwTYb3ISotvoPHzCOBxaf-_CCu8qaxZZbusLlmKD9NEROIk9mN1lx4&usqp=CAU",
        },
        {
          name: "Xiaomi Mi 11",
          year: 2021,
          price: "11,000",
          specs: {
            ram: "8 GB",
            memory: "128 GB",
          },
          description: "8 GB Ram 128GB Storage",
          image:
            "data:image/jpeg;base64,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",
        },

        {
          name: "OnePlus 9",
          year: 2021,
          price: "14,000",
          specs: {
            ram: "8 GB",
            memory: "128 GB",
          },
          description: "8 GB Ram 128GB Storage",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKyUb-eF7LNRtv9TfAM7mfwILFwh09VYbnWFjyb3I7mnQF5sCJggXLeKGXKbuRf3amGI&usqp=CAU",
        },
        {
          name: "Xiaomi Mi 10",
          year: 2020,
          price: "5,000",
          specs: {
            ram: "8 GB",
            memory: "128 GB",
          },
          description: "8 GB Ram 128GB Storage",
          image:
            "data:image/jpeg;base64,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",
        },
        {
          name: "Samsung Galaxy S20",
          year: 2020,
          price: "6,000",
          specs: {
            ram: "8 GB",
            memory: "128 GB",
          },
          description: "8 GB Ram 128GB Storage",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j_AeJgqHwb-1-ZwTYb3ISotvoPHzCOBxaf-_CCu8qaxZZbusLlmKD9NEROIk9mN1lx4&usqp=CAU",
        },
      ],
    },
    {
      catagory: "Refrigerator",
      data: [
        {
          name: "Samsung RF28R7351SR",
          year: 2021,
          price: "40,000",
          specs: {
            capacity: "28 cu. ft.",
            type: "French Door",
            energy_rating: "ENERGY STAR Certified",
          },
          description:
            "28 cu. ft. capacity, French Door type, ENERGY STAR Certified energy rating",
          image:
            "https://www.nicepng.com/png/detail/255-2554930_samsung-bottom-freezer-and-french-doors-refrigerator-samsung.png",
        },
        {
          name: "Samsung RT18M6213SR",
          year: 2021,
          price: "25,000",
          specs: {
            capacity: "18 cu. ft.",
            type: "Top Freezer",
            energy_rating: "ENERGY STAR Certified",
          },
          description:
            "18 cu. ft. capacity, Top Freezer type, ENERGY STAR Certified energy rating",
          image:
            "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/french-doors/pdp/rf23m8070sr-aa/features/rf23m8070sraa-feature-06-counter-depth-ss-708-031517.jpg?$feature-benefit-jpg$",
        },
        {
          name: "Samsung RF23M8070SR",
          year: 2020,
          price: "50,300",
          specs: {
            capacity: "23 cu. ft.",
            type: "French Door",
            energy_rating: "ENERGY STAR Certified",
          },
          description:
            "23 cu. ft. capacity, French Door type, ENERGY STAR Certified energy rating",
          image:
            "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/french-doors/pdp/rf23m8070sr-aa/features/rf23m8070sraa-feature-06-counter-depth-ss-708-031517.jpg?$feature-benefit-jpg$",
        },
        {
          name: "Samsung RS27T5561SR",
          year: 2020,
          price: "38,000",
          specs: {
            capacity: "27 cu. ft.",
            type: "Side-by-Side",
            energy_rating: "ENERGY STAR Certified",
          },
          description:
            "27 cu. ft. capacity, Side-by-Side type, ENERGY STAR Certified energy rating",
          image:
            "data:image/jpeg;base64,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",
        },
        {
          name: "Samsung RF28T5021SR",
          year: 2020,
          price: "24,340",
          specs: {
            capacity: "28 cu. ft.",
            type: "French Door",
            energy_rating: "ENERGY STAR Certified",
          },
          description:
            "28 cu. ft. capacity, French Door type, ENERGY STAR Certified energy rating",
          image:
            "https://images.webfronts.com/cache/rdhjekvyyvut.jpg?imgeng=/w_500/h_500/m_letterbox_ffffff_100",
        },
      ],
    },
    {
      catagory: "Wires",
      data: [
        {
          name: "Insulation Wire",
          year: 2022,
          price: "20/m",
          image: "https://cdn.moglix.com/p/I/W/Q/d/MINIWQ84IZ2BF-xxlarge.jpg",
          description:
            "Copper metal Conductor 12 AWG wire size 600V voltage rating and PVC insulation material",
          specs: {
            metal_name: "Copper",
            metal_type: "Conductor",
            wire_size: "12 AWG",
            voltage_rating: "600V",
            insulation_material: "PVC",
          },
        },
        {
          name: "Aluminum Conductor",
          year: 2022,
          price: "10/m",
          image:
            "https://4.imimg.com/data4/SN/LN/MY-3071363/aac-all-aluminum-conductor-bare-500x500.png",
          description:
            "Aluminum metal Conductor 16 AWG wire size 250V voltage rating and PVC insulation material",
          specs: {
            metal_name: "Aluminum",
            metal_type: "Conductor",
            wire_size: "16 AWG",
            voltage_rating: "250V",
            insulation_material: "PVC",
          },
        },
        {
          name: "Grounding Wire",
          year: 2021,
          price: "25/m",
          image: "https://www.maltep.com/img/cms/Cables/cable_cuivre_nu_14.jpg",
          description:
            "Copper metal Grounding Wire 10 AWG wire size 800V voltage rating and XLPE insulation material",
          specs: {
            metal_name: "Copper",
            metal_type: "Grounding Wire",
            wire_size: "10 AWG",
            voltage_rating: "800V",
            insulation_material: "XLPE",
          },
        },
        {
          name: "Grounding Wire",
          year: 2020,
          price: "15/m",
          image:
            "https://4.imimg.com/data4/SN/LN/MY-3071363/aac-all-aluminum-conductor-bare-500x500.png",
          description:
            "Aluminum metal Grounding Wire 10 AWG wire size 600V voltage rating and PE insulation material",
          specs: {
            metal_name: "Aluminum",
            metal_type: "Grounding Wire",
            wire_size: "10 AWG",
            voltage_rating: "600V",
            insulation_material: "PE",
          },
        },
        {
          name: "Aluminum Conductor",
          year: 2021,
          price: "10/m",
          image:
            "https://4.imimg.com/data4/SN/LN/MY-3071363/aac-all-aluminum-conductor-bare-500x500.png",
          description:
            "Aluminum metal Conductor 20 AWG wire size 150V voltage rating and PE insulation material",
          specs: {
            metal_name: "Aluminum",
            metal_type: "Conductor",
            wire_size: "20 AWG",
            voltage_rating: "150V",
            insulation_material: "PE",
          },
        },
      ],
    },
  ];
  return (
    <Container>
      {data.map((ele) => {
        return (
          <>
            <Header>{ele.catagory}</Header>
            <Block>
              {ele.data.map((ele) => {
                return (
                  <Card>
                    <Title>{ele.name}</Title>
                    <Image>
                      <img src={ele.image} alt="pata nhi" />
                    </Image>
                    <Section3>
                      <DetailContainer>
                        <Details>{ele.description}.... </Details>
                        <Price> ₹ {ele.price}</Price>
                      </DetailContainer>
                      <AddToCart>
                        <Icon>
                          <ShoppingCartIcon />
                        </Icon>
                        <Text>Add to cart</Text>
                      </AddToCart>
                    </Section3>
                  </Card>
                );
              })}
            </Block>
          </>
        );
      })}
    </Container>
  );
}

export default SmallCardArea;
const Container = styled.div`
  width: 98.9vw;
  font-family: "Nunito", sans-serif;
  height: 600px;
`;
const Header = styled.div`
  color: rgb(79, 183, 73);
  margin-top: 80px;
  margin-left: 60px;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
`;
const Block = styled.div`
  height: 280px;
  margin: 20px 60px;
  width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Card = styled.div`
  height: 90%;
  box-shadow: 0px 0px 32px -4px rgba(0, 0, 0, 0.75);
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 20px;
  margin-left: 15px;
`;
const Image = styled.div`
  height: 140px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
const Details = styled.div`
  font-size: 12px;
  max-width: 100px;
  max-height: 35px;
  overflow: hidden;
`;
const AddToCart = styled.div`
  font-size: 12px;
  padding: 2px;
  position: relative;
  left: 3px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: rgb(215, 235, 213);
  border: 2px solid rgb(79, 183, 73);
  transition: 300ms;
  &:hover {
    border: 2px solid transparent;
    background-color: rgb(79, 183, 73);
    transform: scale(1.1);
  }
  align-items: center;
  border-radius: 5px;
`;
const Section3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  margin-bottom: 5px;
`;
const Icon = styled.div``;
const Text = styled.div``;
const DetailContainer = styled.div``;
const Price = styled.div``;
