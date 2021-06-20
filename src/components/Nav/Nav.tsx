import styled from "styled-components";
import Link from 'next/link';

const Nav = () => (
    <Container>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/portfolio">
            <a>Portfolio</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
    </Container>
);

const Container = styled.ul`
  grid-area: nav;
  list-style: none;
  margin: 0;
  padding: 0;
  display:flex;

  a {
    color: ${props => props.theme.colors.white};
    font-weight: 100;
    letter-spacing: .2rem;
    text-decoration: none;
    background:rgba(0,0,0,0.2);
    padding:2rem .5rem;
    display: inline-block;
    width: 100%;
    text-align: center;
    transition:all 0.5s;
  }

  a:hover {
    background:rgba(0,0,0,0.8);
  }
`;

export default Nav;
