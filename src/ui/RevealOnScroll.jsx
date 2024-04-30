import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const visibility = {
  visible: css`
    opacity: 1;
  `,
};
const StyledObserver = styled.div`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1500ms;
  opacity: 0.1;

  ${(props) => visibility[props.visible]}
`;

function RevealOnScroll({ children }) {
  const [visible, setVisible] = useState();
  const visibilityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(visibilityRef.current);
  }, []);
  return (
    <StyledObserver ref={visibilityRef} visible={`${visible ? "visible" : ""}`}>
      {children}
    </StyledObserver>
  );
}

export default RevealOnScroll;
