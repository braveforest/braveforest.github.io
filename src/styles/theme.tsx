import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container } from './globals';
import Meta from "@/components/Meta";

const theme =  {
  // Colors for layout
  maxWidth: '1300px',
  colors: {
    black: '#393939',
    white: '#ffffff',
  },
  // Breakpoints for responsive design
  breakpoints: {
    xs: '(min-width: 576px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)'
  },
}

type Props = {
  children: ReactNode
}

const Theme = ({ children } : Props)  => (
  <ThemeProvider theme={theme}>
    <Meta />
    <GlobalStyles/>
    <Container>
      {children}
    </Container>
  </ThemeProvider>
);

export default Theme;