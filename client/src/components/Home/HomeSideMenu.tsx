import styled from 'styled-components';
import HomeBanner from './HomeBanner';
import HomeSearch from './HomeSearch';

const SideMenuWrapper = styled.div`
  border: none;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 15px -8px #000;
  width: 380px;
  position: fixed;
  height: 100%;
  text-align: center;
  z-index: 999;
`;

const SideMenuHeader = styled.header`
  border: none;
  background-color: #ffdeeb;
  height: 200px;
  padding: 0 20px;
`;

function HomeSideMenu({ searchPlaces }: any) {
  return (
    <>
      <SideMenuWrapper>
        <SideMenuHeader>
          <HomeBanner />
          <HomeSearch searchPlaces={searchPlaces} />
        </SideMenuHeader>
      </SideMenuWrapper>
    </>
  );
}

export default HomeSideMenu;
