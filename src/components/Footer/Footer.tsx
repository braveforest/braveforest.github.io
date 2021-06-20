import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>© {new Date().getFullYear()} Vincent Tai </p>
    </Container>
  )
}

const Container = styled.footer`
  grid-area: footer;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background:rgba(0,0,0,0.2);
  text-align: center;
`;

export default Footer
