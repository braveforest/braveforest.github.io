import { ReactElement } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import styled from 'styled-components';

const Header = () : ReactElement =>  (
  <Container>
    <Logo>
      <Link href="/">
        Vincent Tai
      </Link>
    </Logo>
    <SocialLink>
      <SocialItem>
        <SocialIcons href="https://github.com/braveforest" target="_blank">
          <AiFillGithub />
        </SocialIcons>
      </SocialItem>
      <SocialItem>
        <SocialIcons href="https://twitter.com/braveforest92" target="_blank">
          <AiOutlineTwitter />
        </SocialIcons>
      </SocialItem>
      <SocialItem>
        <SocialIcons href="https://www.facebook.com/braveforest" target="_blank">
          <AiFillFacebook />
        </SocialIcons>
      </SocialItem>
    </SocialLink>
  </Container>
);

export const Container = styled.nav`
  grid-area: header;
  padding-left: 30px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  a { 
    display: flex;
    color: ${props => props.theme.colors.white};
    align-items: center; 
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 2rem;
  }
`;

export const SocialLink = styled.ul`
  list-style: none;
  display: flex;
`;

export const SocialItem = styled.li`
  a {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
   
   &:hover {
      background-color: rgba(0,0,0,0.8);
      transform: scale(1.2);
      cursor: pointer;
    }

    svg {
      height: 2rem;
      width: 2rem;
    }
  
    @media ${props => props.theme.breakpoints.md}{
      svg {
          height: 3rem;
          width: 3rem;
        }
    }
`;

export default Header;