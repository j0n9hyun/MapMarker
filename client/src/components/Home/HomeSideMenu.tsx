import { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomeBanner from './HomeBanner';
import HomeSearch from './HomeSearch';
import HomeSearchList from './HomeSearchList';

const { kakao }: any = window;
function HomeSideMenu() {
  const [searchPlaceList, setSearchPlaceList] = useState('');
  const [test, setTest]: any = useState('');
  useEffect(() => {
    let options = {
      center: new kakao.maps.LatLng(37.4970214, 127.0259794),
      level: 4,
    };
    let container: any = document.getElementById('map');
    let map = new kakao.maps.Map(container, options);
    setTest(map);
  }, []);

  function searchPlaces() {
    let ps = new kakao.maps.services.Places();
    let keyword: any = document.getElementById('keyword');
    if (!keyword.value.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword.value, placesSearchCB);
  }

  function placesSearchCB(data: any, status: any, pagination: any) {
    if (status === kakao.maps.services.Status.OK) {
      setSearchPlaceList(data);
      displayPlaces(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      return;
    }
  }

  function displayPlaces(places: any) {
    console.log('displayPlaces');
    let bounds = new kakao.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
      console.log(placePosition);
      let marker = new kakao.maps.Marker({
        position: placePosition,
      });

      bounds.extend(placePosition);
      marker.setMap(test);
    }
    test.setBounds(bounds);

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  }
  return (
    <>
      <SideMenuWrapper>
        <SideMenuHeader>
          <HomeBanner />
          <HomeSearch searchPlaces={searchPlaces} />
        </SideMenuHeader>
        <SearchListWrapper>
          <HomeSearchList searchPlaceList={searchPlaceList} />
        </SearchListWrapper>
      </SideMenuWrapper>
    </>
  );
}

const SearchListWrapper = styled.div`
  height: calc(100% - 150px);
  overflow-y: auto;
`;

const SideMenuHeader = styled.header`
  border: none;
  background-color: #e7f5ff;
  height: 150px;
  padding: 0 20px;
`;

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
export default HomeSideMenu;
