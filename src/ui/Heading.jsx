import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      /* font-size: 3rem;
      font-weight: 600; */

      font-size: 5.2rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      /* font-size: 2rem;
      font-weight: 600; */

      font-size: 2.4rem;
      font-weight: 700;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.2rem;
      font-weight: 600;
      /* text-align: center; */
    `}

    ${(props) =>
    props.as === "p" &&
    css`
      font-size: 1.6rem;
      line-height: 1.6;
    `}
    
  line-height: 1.4;
`;

Heading.defaultProps = {
  as: "h1",
};

export default Heading;
