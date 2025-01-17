import { useParams, useNavigate } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainDetails from '../components/shows/ShowMainDetails';
import ShowDetails from '../components/shows/ShowDetails';
import Season from '../components/shows/Season';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Show() {
  const { showId } = useParams();
  const navigateTo = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ['show', showId],
    queryFn: async () => {
      return await getShowById(showId);
    },
    staleTime: 1000 * 60 * 5,
  });
  console.log(data);
  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const { name, image, rating, summary, genres, status, network, premiered } =
    data || {};

  const goBack = () => {
    navigateTo('/');
  };
  return (
         <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back to home</Link>
        </BackHomeWrapper>
    
      <ShowMainDetails
        name={name || 'NA'}
        image={image?.original || null}
        rating={rating?.average || null}
        summary={summary || null}
        genre={genres || []}
      />
          <InfoBlock>
      <ShowDetails
        status={status || null}
        network={network || null}
        premiered={premiered || null}
      />
      </InfoBlock>
      <InfoBlock>
      <Season season={data._embedded.seasons || null} />
      </InfoBlock>
      <InfoBlock>
      <Cast cast={data._embedded.cast || null} />
      </InfoBlock>
      </ShowPageWrapper>
  );
}

export default Show;


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;