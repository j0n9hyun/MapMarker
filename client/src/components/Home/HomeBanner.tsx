import styled from 'styled-components';

function HomeBanner() {
  return <BannerContainer>Map Marker</BannerContainer>;
}
const BannerContainer = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 1.3rem;
  margin: 20px;
  cursor: pointer;
`;

export default HomeBanner;
