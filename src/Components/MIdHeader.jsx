import React from "react";
import styled from "styled-components";

function MidHeader(){
    return <header>
    <TopHeader>
    <h1>Locate E-waste spots with grace,
Shop for treasures in an eco-friendly space</h1>
    </TopHeader>

    </header>
}

export default MidHeader;
const TopHeader = styled.div` font-size: 28;
font-family: var(--h2_typography-font-family);
color: #4fb749;
`;