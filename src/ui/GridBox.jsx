import styled from "styled-components";

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  /* gap: 3rem; */
  align-items: center;
  text-align: center;
  padding: 0rem 3rem;
  width: 110rem;
  margin: 0 auto;

  @media (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
    width: fit-content;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: fit-content;
  }
`;
