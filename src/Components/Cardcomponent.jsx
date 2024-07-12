import styled from "styled-components";
import As from "../images/CardImage/ASimg.jpg";
import Pb from "../images/CardImage/pdimg.webp";
import Ba from "../images/CardImage/BA2.jpg";
import Be from "../images/CardImage/Beimg.jpg";
import Brf from "../images/CardImage/bfrimg.webp";
import Cd from "../images/CardImage/CDimg.webp";
import Hg from "../images/CardImage/hg.png";
import Pt from "../images/CardImage/PHimg.jpg";
import Pvc from "../images/CardImage/PVCimg.jpg";
import React, { useEffect, useState } from "react";
function Cardcomponent() {
  const CardInfo = [
    {
      index: 0,
      image: Pb,
      name: "Lead (Pb)",
      content:
        "Lead is often used in cathode ray tube (CRT) monitors and older soldering materials. It can leach into the soil and water if e-waste is not properly recycled or disposed of.",
    },
    {
      index: 1,
      image: As,
      name: "Arsenic (As)",
      content:
        "Arsenic is used in some older types of semiconductors and can be released into the environment if not managed properly. Arsenic exposure can lead to a range of serious health problems, including skin lesions, cardiovascular issues, and an increased risk of various cancers, particularly lung and bladder cancer. Long-term exposure to even low levels of arsenic in drinking water can result in chronic health effects, making it a significant public health concern worldwide.",
    },
    {
      index: 2,
      image: Ba,
      name: "Barium (Ba)",
      content:
        "Barium is used in cathode ray tubes (CRTs) and can be released when these devices are broken down or improperly disposed of.Barium exposure can be harmful to human health, primarily through ingestion or inhalation. It can lead to gastrointestinal problems, such as nausea, vomiting, and diarrhea. Inhalation of barium compounds can cause respiratory issues and lung damage. Prolonged exposure to high levels of barium can result in more severe health complications, including muscle weakness and heart irregularities.",
    },
    {
      index: 3,
      image: Be,
      name: "Beryllium (Be)",
      content:
        "Beryllium is used in some electronic components and can pose health risks if released into the environment. Beryllium can lead to chronic beryllium disease (CBD) when inhaled, causing lung damage, coughing, and shortness of breath. Prolonged exposure also elevates the risk of lung cancer. Strict safety measures are essential when working with beryllium to prevent these health hazards.",
    },
    {
      index: 4,
      image: Brf,
      name: "Brominated Flame Retardants (BFRs)",
      content:
        "BFRs are used in the plastic housings of many electronic devices, including laptops and televisions. When e-waste is incinerated or improperly disposed of, these chemicals can release toxic fumes. Prolonged exposure may lead to thyroid disruption and hormone imbalances. They can accumulate in the body and have been associated with neurological and developmental issues, especially in children. BFRs are also linked to potential reproductive problems.",
    },
    {
      index: 5,
      image: Cd,
      name: "Cadmium (Cd)",
      content:
        "Cadmium is used in older rechargeable batteries, such as nickel-cadmium (Ni-Cd) batteries, and it can pose health risks if released into the environment. Cadmium is a dangerous heavy metal that poses significant health risks. Inhalation or ingestion can lead to lung and prostate cancer. It damages the kidneys, potentially causing renal failure. Long-term exposure may result in bone weakening and hypertension.",
    },
    {
      index: 6,
      image: Hg,
      name: "Mercury (Hg)",
      content:
        "Mercury is commonly found in fluorescent lamps, such as compact fluorescent lamps (CFLs) and some LCD screens. Mercury can contaminate the environment and is highly toxic to humans and wildlife. Mercury is highly toxic and can have severe health impacts. It impairs the nervous system, causing neurological disorders. Prenatal exposure can harm fetal development. Consumption of contaminated seafood can lead to mercury poisoning, affecting the cardiovascular and digestive systems.",
    },
    {
      index: 7,
      image: Pt,
      name: "Phthalates",
      content:
        " Phthalates are plasticizers used in cables and wires to make them more flexible. These chemicals can be harmful to human health and the environment. Phthalates, common in plastics and personal care products, can disrupt hormones, potentially causing reproductive problems, developmental issues, and respiratory irritation. Prolonged exposure to phthalates is a health concern, particularly for pregnant women and children.",
    },
    {
      index: 8,
      image: Pvc,
      name: "Polyvinyl Chloride (PVC)",
      content:
        "PVC is a common type of plastic used in cables and wires. When burned or broken down in landfills, it can release chlorine gas and dioxins, which are highly toxic compounds. It's exposure can lead to respiratory problems due to chlorine gas release when burned and may cause cancer and hormone disruption from chemical exposure. Proper handling and disposal are crucial to minimize health risks.",
    },
  ];
  const [CurrentIndex, SetCurrentIndex] = useState(0);
  const [ExtraIndex, SetExtraIndex] = useState(0);
  const Interval = 2000;
  const total = CardInfo.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ExtraIndex < total - 5) {
        SetCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
        SetExtraIndex(CurrentIndex);
      } else {
        SetCurrentIndex((prevCurrentIndex) => prevCurrentIndex - 1);
        if (CurrentIndex === 0) {
          SetExtraIndex(CurrentIndex);
        }
      }
    }, Interval);
    return () => clearInterval(intervalId);
  }, [CurrentIndex, ExtraIndex]);

  return (
    <Container>
      Hazardous Chemicals
      <CardDisplay>
        <CardArea curIndex={CurrentIndex}>
          {CardInfo.map((ele) => {
            return (
              <Card key={ele.id} index={ele.index} curIndex={CurrentIndex}>
                <Icon>
                  <img src={ele.image} alt="lead.img" />
                </Icon>
                <CardHead>
                  <h2>{ele.name}</h2>
                </CardHead>
                <Cardcontent>{ele.content}</Cardcontent>
              </Card>
            );
          })}
        </CardArea>
      </CardDisplay>
    </Container>
  );
}

export default Cardcomponent;
const Container = styled.div`
  position: absolute;
  width: 100vw;
  background-color: rgb(79, 183, 73);
  height: 630px;
  padding: 80px;
  font-family: "Nunito", sans-serif;
  color: white;
  font-size: 80px;
`;
const CardDisplay = styled.div`
  margin-top: 20px;
  position: absolute;
  left: 310px;
  overflow: hidden;
  background-color: rgb(79, 183, 73);
  height: 580px;
  width: 67vw;
`;
const CardArea = styled.div`
  display: flex;
  left: -310px;
  position: absolute;
  background-color: rgb(79, 183, 73);
  padding: 20px 0;
  transition: 1000ms;
  transform: translateX(
    ${(props) => {
      return -330 * props.curIndex;
    }}px
  );
`;
const Card = styled.div`
  width: 290px;
  text-align: center;
  color: black;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  font-size: 12px;
  transition: 1000ms;
  transform: scale(
    ${(props) => {
      console.log(props.index);
      console.log(props.curIndex);
      if (props.index === props.curIndex + 2) {
        return 1.07;
      } else return 1;
    }}
  );
`;

const CardHead = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0px;
  h2 {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

const Cardcontent = styled.div`
  padding: 30px;
  padding-top: 10px;
  font-size: 1em;
`;

const Icon = styled.div`
  height: 100px;
  width: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally and vertically */
  margin-top: 20px;
  ${
    "" /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }
  img {
    border-radius: 50%;
    width: 80%;
    height: 80%;
    padding-top: 5px;
  }
`;
