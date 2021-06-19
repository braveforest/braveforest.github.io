import { ReactElement } from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';

const HomePage = () : ReactElement => (
    <Container>
        <h1>
            Hi, I&apos;m Vincent Tai.<br />
            I&apos;m  full stack web developer.  <br />
            I use {' '}
            <Typed
                strings={[
                    'Javascript',
                    'PHP',
                    'Node.js',
                    'CSS',
                    'MySQL',
                    'MongoDB',
                ]}
                typeSpeed={80}
                backSpeed={80}
                loop={true}
            />
            <br /><br />

            Framework I like to work with : <br/>
            <a target="_blank" rel="noreferrer" href="https://laravel.com/">Laravel</a> {' '}
            <a target="_blank" rel="noreferrer" href="https://nextjs.org/">Nextjs</a> {' '}
            <a target="_blank" rel="noreferrer" href="https://expressjs.com/">Express</a> {' '}
            <a target="_blank" rel="noreferrer" href="https://www.prisma.io/">Prisma</a> {' '}
            <a target="_blank" rel="noreferrer" href="https://angular.io/">Angular</a> {' '}
            <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/">Bootstrap</a> {' '}
        </h1>
    </Container>
);

const Container = styled.div`
    height: 60vh;
    display: grid;
    align-content: center;
    justify-items: center;
`;

export default HomePage;
