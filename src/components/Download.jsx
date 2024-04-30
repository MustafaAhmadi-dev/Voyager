import styled from "styled-components";
import Img1 from "../assets/download/appstore.svg";
import Img2 from "../assets/download/googleapp.svg";
import Container from "../ui/Container";

const StyledSection = styled.section`
  background-image: url("/src/assets/banners/bg02.png");
  background-color: var(--color-grey-100);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 10rem 0;

  @media (max-width: 700px) {
    background-image: none;
  }
`;

const StyledText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 55rem;
  text-align: left;

  @media (max-width: 700px) {
    text-align: center;
    margin: 0 auto;
  }

  p {
    color: var(--color-grey-700);
    line-height: 1.5;
  }
`;

const StyledBtn = styled.section`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 700px) {
    justify-content: center;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 40%;
    cursor: pointer;

    @media (max-width: 550px) {
      width: 22rem;
    }
  }
`;

function Download() {
  return (
    <>
      <StyledSection>
        <Container>
          <StyledText>
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>

            <StyledBtn>
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </StyledBtn>
          </StyledText>
        </Container>
      </StyledSection>
    </>
  );
}

export default Download;
