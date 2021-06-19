import { ReactElement } from "react";
import styled from 'styled-components';
import SinglePortfolio from '@/components/SinglePortfolio';
import { projectData } from '@/constants';

const PortfolioPage = () : ReactElement => (
   <Cards>
      {projectData.map(item => <SinglePortfolio data={item} key={item.id} />)}
  </Cards>
);

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export default PortfolioPage;


