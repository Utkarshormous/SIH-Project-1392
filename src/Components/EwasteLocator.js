import React, { useState } from "react";
import "./EwasteLocator.css";
import styled from "styled-components";

export default function Appli() {
  return (
    <div className="app-container">
      <BigDaddy>
        <Container>
          <div className="content">
            <EWasteLocator />
          </div>
          <div className="map-selection">
            <div className="gmap-frame">
              <iframe
                width="100%"
                height="500"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Unique%20eco%20recyclers)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Population Estimator map
                </a>
              </iframe>
            </div>
          </div>
        </Container>
      </BigDaddy>
    </div>
  );
}

function EWasteLocator() {
  const [searchInput, setSearchInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      setShowResults(true);
    }
  };

  return (
    <div className="ewaste-locator">
      <NavAdjust />
      <Header>
        <h1>E-Waste Locator</h1>
        <p>Find the nearest e-waste disposal centers</p>
      </Header>
      <Leftout>
        <div className="container">
          <div className="search-box">
            <h2>Search for E-Waste Disposal Centers</h2>
            <div className="input-group">
              <input
                type="text"
                className="search-input"
                placeholder="Enter your location"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className={showResults ? "show" : ""}>
            <SubContainer>
              <h2>Results</h2>
              <ul>
                <li className="location-item">
                  <h3>Unique Eco Recyclers</h3>
                  <p>Address: RD,Udyog Nagar, Indore, Madhya Pradesh, 452007</p>
                  <p>Phone: +91 6598569489</p>
                  <button className="btn">📞Pickup</button>
                </li>
                <li className="location-item">
                  <h3>Urbeno Recyclers</h3>
                  <p>
                    Address: Near Sarafa Bazar, Indore, Madhya Pradesh, 452010
                  </p>
                  <p>Phone: +91 9789269489</p>
                  <button className="btn">📞Pickup</button>
                </li>

                <li className="location-item">
                  <h3>EcoGlobe Recyclers</h3>
                  <p>
                    Address: Near Sarafa Bazar, Indore, Madhya Pradesh, 452010
                  </p>
                  <p>Phone: +91 9789269489</p>
                  <button className="btn">📞 Pickup</button>
                </li>
              </ul>
            </SubContainer>
          </div>
        </div>
      </Leftout>
    </div>
  );
}
const Header = styled.div`
  position: absolute;
  top: -40px;
  left: 0px;
  padding-bottom: 30px;
  width: 100vw;
  align-items: center;
  color: rgb(79, 183, 73);
  justify-content: center;
  display: flex;
  border-bottom: 2px solid rgb(79, 183, 73);
  flex-direction: column;
`;
const Leftout = styled.div`
  margin-top: 50px;
`;
const Container = styled.div`
  position: relative;
  top: 150px;
  font-family: "Nunito", sans-serif;
  display: flex;
`;
const SubContainer = styled.div`
  margin-top: 60px;
`;
const NavAdjust = styled.div`
position: absolute;
height: 100px;
top: -150px;
left: 0;
width: 100%;
background-image: linear-gradient(
  to bottom,
  rgb(79, 183, 73),
  rgb(79, 183, 73, 0.5)
);
`;
const BigDaddy = styled.div`
  position: absolute;
  height: 120%;
  width: 100%;
  background-color: rgb(225, 235, 223);
`;
