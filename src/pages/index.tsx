import { useRef, useEffect } from "react";
import styled from 'styled-components';
import Typed from "typed.js";

const HomePage = () => {
  const typeTarget = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let typed: Typed;

    if(typeTarget.current){
      typed = new Typed(typeTarget.current, {
        strings: [
          'Javascript',
          'PHP',
          'Node.js',
          'CSS',
          'MySQL',
          'MongoDB'
        ],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
      });
    }
 
    return () => {
      if(typed){
        typed.destroy();  // Make sure to destroy Typed instance during cleanup, to prevent memory leaks
      }
    };
  }, []);

  return (
    <Container>
      <h1>
        Hi, I&apos;m Vincent Tai.<br />
        I&apos;m  full stack web developer.  <br />
        I use <span ref={typeTarget} />
        <br /><br />
        Framework I like to work with : <br/>
        <a target="_blank" rel="noreferrer" href="https://laravel.com/">Laravel</a> {' '}
        <a target="_blank" rel="noreferrer" href="https://nextjs.org/">Nextjs</a> {' '}
        <a target="_blank" rel="noreferrer" href="https://expressjs.com/">Express</a> {' '}
        <a target="_blank" rel="noreferrer" href="https://www.prisma.io/">Prisma</a> {' '}
        <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/">Bootstrap</a> {' '}
        <a target="_blank" rel="noreferrer" href="https://styled-components.com/">Styled-Components</a> {' '}
      </h1>
    </Container>

  )
};

const Container = styled.div`
    height: 60vh;
    display: grid;
    align-content: center;
    justify-items: center;
`;

export default HomePage;
