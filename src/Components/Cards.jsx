import styled from "styled-components";
import Cardcomponent from "./Cardcomponent";

function Card() {
  return (
    <Cardsection>
      <Cardcomponent />
    </Cardsection>
  );
}

export default Card;

const Cardsection = styled.div`
  position: relative;
  display: flex;
`;
