import styled from 'styled-components';

type Props = {
  portfolio : {
    id: number;
    image: string;
    title: string;
    link?: string;
    description: string;
  }
}

const PortfolioCard = ({portfolio} : Props ) => (
  <Card>
    <a target="_blank" rel="noreferrer" href={portfolio.link}>
      {/* eslint-disable-next-line */ }
      <img src={portfolio.image} alt="portfolioThumbnail"/>
    </a>
    <div className="details">
      <a target="_blank" rel="noreferrer" href={portfolio.link}><h2>{portfolio.title}</h2></a>
      <p>{portfolio.description}</p>
    </div>
  </Card>
);

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-gap: 1rem;
  align-items: center;
  font-size: 2rem;

  img {
    height: 20rem;
    width: 100%;
  }

  .details {
    width: 100%;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
export default PortfolioCard;