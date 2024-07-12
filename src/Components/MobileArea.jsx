import styled from "styled-components";
import MidHeader from "./MIdHeader";
import MobileImg from "../images/CardImage/mobile.png";
import TopHeader from "./TopHeader";
import Typewriter from "typewriter-effect";
import "./style.css";
function MobileArea() {
  return (
    <Container>
      <TopHeader />
      <MidHeader />
      <Mobile>
        <img className="mobileimg" src={MobileImg} alt="Mobile" />
        <Paragroup>
          <SubHeading>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(8000)
                  .typeString("Our Solution-")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("What we do ?")
                  .start();
              }}
            />
          </SubHeading>
          <p className="par1">
            Our website serves as a comprehensive platform that not only helps
            users find e-waste recycling facilities but also educates them about
            the impact of e-waste and provides practical solutions such as
            reusing refurbished electronics. We aim to empower individuals and
            businesses to make environmentally conscious choices when it comes
            to electronics consumption and disposal.
          </p>
          <p className="par2">
            We have a blog section where we provide information and creative
            ideas about how we can reuse the E-Waste.
          </p>
        </Paragroup>
      </Mobile>
      <Extra>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Extra>
    </Container>
  );
}

export default MobileArea;

const Container = styled.div`
  display: flex;
  font-family: "Nunito", sans-serif;
  align-items: center;
  flex-direction: column;
`;
const Mobile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SubHeading = styled.div`
  font-size: 50px;
  margin-bottom: 60px;
`;
const Paragroup = styled.div`
  text-around: center;
  max-width: 500px;
  max-height: 700px;
  font-size: 20px;
  padding-right: 50px;
  line-height: 30px;
`;
const Extra = styled.div`
  max-width: 1000px;
  margin-top: 50px;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
`;
