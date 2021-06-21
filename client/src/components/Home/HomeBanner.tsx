import styled from 'styled-components';

const BannerContainer = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 1.3rem;
  margin: 20px;
  cursor: pointer;
`;

function HomeBanner() {
  return <BannerContainer>Map Marker</BannerContainer>;
}

export default HomeBanner;
