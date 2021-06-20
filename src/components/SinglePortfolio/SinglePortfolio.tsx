import styled from 'styled-components';

type Props = {
  data: DataType
  key: number
}

type DataType = {
  image: string
  title: string
  description: string
  link?: string
}

const SinglePortfolio = ({data} : Props ) => (
  <Card>
    <a target="_blank" rel="noreferrer" href={data.link}>
      
      <a target="_blank" rel="noreferrer" href={data.link}>
        {/* eslint-disable-next-line */ }
        <img className="image" src={data.image} alt="portfolioThumbnail"/>
      </a>
    </a>
    <div className="details">
      <a target="_blank" rel="noreferrer" href={data.link}><h2>{data.title}</h2></a>
      <p>{data.description}</p>
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
  }

  .image {
    width: 100%;
  }

  .details {
      width: 100%;
  }

  @media (max-width: 500px) {
      grid-template-columns: 1fr;
  }
`;
export default SinglePortfolio;