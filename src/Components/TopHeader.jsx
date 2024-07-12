import React from "react";
import styled from "styled-components";
function TopHeader(){
    return <header>
    <Midheader>
    <h1>IT’S TIME TO RETHINK ELECTRONICS</h1>
    </Midheader>

    </header>
}

export default TopHeader;
const Midheader = styled.div` font-size: 28;
font-family: var(--h2_typography-font-family);
color: black;
`;