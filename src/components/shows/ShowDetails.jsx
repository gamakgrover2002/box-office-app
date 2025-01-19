import styled from "styled-components";
function ShowDetails({ status, network, premiered }) {
  return (
    <DetailsWrapper>
      <h6>{status ? status : 'NA'}</h6>
      <h4>{network ? network : 'NA'}</h4>
      <h4>{premiered ? premiered : 'NA'}</h4>
    </DetailsWrapper>
  );
}

export default ShowDetails;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;