import styled from 'styled-components';
import PortfolioCard from '@/components/PortfolioCard';
import { projectData } from '@/constants';

const PortfolioPage = () => (
   <CardList>
      {projectData.map(item => <PortfolioCard portfolio={item} key={item.id} />)}
  </CardList>
);

const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export default PortfolioPage;