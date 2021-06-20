import { ReactNode } from 'react';
import styled from "styled-components";

const Container = styled.div`
  grid-area: content;
  padding: 2rem;
`;

type Props = {
  children: ReactNode
}

const Content = ({ children } : Props)  => (
  <Container>
    {children}
  </Container>
);

export default Content



