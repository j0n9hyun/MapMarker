import styled from 'styled-components';
import HomeSideMenu from './HomeSideMenu';

function HomeLayout() {
  return (
    <>
      <HomeSideMenu />
      <HomeMapWrapper>
        <MapBox id='map' />
      </HomeMapWrapper>
    </>
  );
}
const HomeMapWrapper = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 380px);
`;

const MapBox = styled.div`
  width: 100%;
  height: 100vh;
`;

export default HomeLayout;
