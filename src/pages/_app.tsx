import type { AppProps } from 'next/app';
import styled from "styled-components";
import Theme from '@/styles/theme';
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

const App = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <Container>
      <Header />
      <Nav />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Container>
  </Theme>
);

export default App

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 1rem;
`;




