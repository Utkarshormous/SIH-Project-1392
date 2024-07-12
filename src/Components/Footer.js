import React from "react";
import styled from "styled-components";
import logo from "../Logo/logo.png";
// Styled components
const FooterContainer = styled.footer`
  padding: 4rem 3rem;
  background-color: #dbdfdb;
`;

const FooterItem = styled.div`
  margin-right: 4rem;
  padding-bottom: 176px;
`;

const FooterLink = styled.a`
  font-size: 1.8rem;
  color: #000000;
  text-decoration: none;
`;

const LogoImage = styled.img`
  display: flex;
  height: 16rem;
  width: auto;
  border-radius: 50%;
`;

const LogoContainer = styled.div`
  margin-left: 73px;
  max-width: 25%;
`;

const CopyrightText = styled.p`
  font-size: 1.8rem;
  color: #aaa;
  text-align: center;
  margin: 9px;
`;

const NamoText = styled.p`
  white-space: normal;
  font-size: 16px;
  word-wrap: break-word;
`;

const OfficeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OfficeHeading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 31px;
  margin-left: -290px;
`;

const OfficePara1 = styled.p`
  margin-top: 80px;
  margin-left: -263px;
  font-size: 15px;
  position: absolute;
  max-width: 25%;
`;

const OfficePara2 = styled.p`
  margin-top: 155px;
  font-size: 15px;
  position: absolute;
  max-width: 25%;
  margin-left: -263px;
`;

const ContactHeading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 31px;
  margin-left: -290px;
`;

const ContactIcon1 = styled.span`
  position: absolute;
  margin-top: 94px;
  margin-left: -287px;
`;

const ContactIcon2 = styled.span`
  position: absolute;
  margin-top: 169px;
  margin-left: -287px;
`;

const ContactPara1 = styled.p`
  margin-top: 10px;
  font-size: 15px;
  position: absolute;
  max-width: 25%;
  margin-left: -250px;
`;

const ContactPara2 = styled.p`
  margin-top: 51px;
  font-size: 15px;
  position: absolute;
  max-width: 25%;
  margin-left: -250px;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: -33px;
`;

const SocialLink = styled.a`
  font-size: 24px;
  color: #000000;
  text-decoration: none;
  transition: color 0.3s;
  margin-right: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="TechCycle Logo" />
        <NamoText>
          TechCycle eWaste Management Ltd. provides comprehensive, complete and
          responsible recycling services
        </NamoText>
      </LogoContainer>
      <FooterItem>
        <OfficeContainer>
          <div className="office">
            <OfficeHeading>Our Office :</OfficeHeading>
            <ContactIcon1>
              <i
                className="fa-solid fa-location-dot fa-2xl"
                style={{ color: "#7aeb0a" }}
              />
            </ContactIcon1>
            <ContactIcon2>
              <i
                className="fa-solid fa-location-dot fa-2xl"
                style={{ color: "#7aeb0a" }}
              />
            </ContactIcon2>
            <OfficePara1>
              TechCycle eWaste Management Ltd. 28/1, Khandawa Road, Indore,
              India
            </OfficePara1>
            <OfficePara2>
              Sector 42, Golf Course Road, Indore, Madhya Pradesh 452020.
            </OfficePara2>
          </div>
        </OfficeContainer>
      </FooterItem>
      <FooterItem>
        <ContactHeading>Contact Us:</ContactHeading>
        <ContactIcon1>
          <i className="fa-solid fa-phone fa-xl" style={{ color: "#5af00a" }} />
        </ContactIcon1>
        <ContactIcon2>
          <i
            className="fa-regular fa-envelope fa-2xl"
            style={{ color: "#68f708" }}
          />
        </ContactIcon2>
        <ContactPara1>1800-123-5124</ContactPara1>
        <ContactPara2>Techcycle@gmail.com</ContactPara2>
      </FooterItem>
      <CopyrightText>
        © Copyright by
        <FooterLink target="_blank" href="https://www.ietdavv.edu.in/">
          TechCycle
        </FooterLink>
        eWaste Management Ltd. All Rights Reserved
      </CopyrightText>
      <SocialLinkContainer>
        <SocialLink href="https://www.ietdavv.edu.in/" target="">
          <i className="fab fa-facebook-f" />
        </SocialLink>
        <SocialLink href="https://www.ietdavv.edu.in/" target="">
          <i className="fab fa-linkedin-in" />
        </SocialLink>
        <SocialLink href="https://www.ietdavv.edu.in/" target="">
          <i className="fab fa-instagram" />
        </SocialLink>
        <SocialLink href="https://www.ietdavv.edu.in/" target="">
          <i className="fab fa-github" />
        </SocialLink>
      </SocialLinkContainer>
    </FooterContainer>
  );
}

export default Footer;
