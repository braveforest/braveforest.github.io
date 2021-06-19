import { ReactElement } from "react";
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import styled from 'styled-components';

const ContactPage = (): ReactElement => (
  <Container>
      <h2>Currently based in Kuala Lumpur, Malaysia</h2>
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
    <a href="mailto:braveforest92@gmail.com"><h3>braveforest92@gmail.com</h3></a>
  </Container>
);

const Container = styled.div`
    height: 60vh;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-gap: 1.5rem;

    h2 {
      text-align: center;
    }

    q {
      text-align: center;
    }
`;

export const SocialLink = styled.ul`
  list-style: none;
  display: flex;
`;

export const SocialItem = styled.li`
  a {
    display: inline-block;
    padding: 5px 30px;
    text-decoration: none;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
   
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

export default ContactPage;
