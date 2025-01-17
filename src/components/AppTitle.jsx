import styled from "styled-components";
function AppTitle(props) {
  const { title, subtitle } = props;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </TitleWrapper>
  );
}

export default AppTitle;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;