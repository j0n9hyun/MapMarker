import { useEffect } from 'react';
import styled from 'styled-components';
import HomeSideMenu from './HomeSideMenu';

const HomeMapWrapper = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 380px);
`;

const MapBox = styled.div`
  width: 100%;
  height: 100vh;
`;

const { kakao }: any = window;

function HomeLayout() {
  let markers: any = [];
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.4970214, 127.0259794),
      level: 4,
    };
    let map = new kakao.maps.Map(container, options);
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    let keyword = document.getElementById('keyword');
  }, []);

  function searchPlaces() {
    let ps = new kakao.maps.services.Places();
    let keyword: any = document.getElementById('keyword');
    console.log(keyword.value);
    if (!keyword.value.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword.value, placesSearchCB);
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  function placesSearchCB(data: any, status: any, pagination: any) {
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      displayPlaces(data);
      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      return;
    }
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places: any) {
    let listEl = document.getElementById('placesList'),
      menuEl = document.getElementById('menu_wrap'),
      fragment = document.createDocumentFragment(),
      bounds = new kakao.maps.LatLngBounds(),
      listStr = '';
    console.log(listEl);
    // // 검색 결과 목록에 추가된 항목들을 제거합니다
    // removeAllChildNods(listEl);

    // // 지도에 표시되고 있는 마커를 제거합니다
    // removeMarker();

    // for ( var i=0; i<places.length; i++ ) {

    //     // 마커를 생성하고 지도에 표시합니다
    //     var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
    //         marker = addMarker(placePosition, i),
    //         itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

    //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    //     // LatLngBounds 객체에 좌표를 추가합니다
    //     bounds.extend(placePosition);

    //     // 마커와 검색결과 항목에 mouseover 했을때
    //     // 해당 장소에 인포윈도우에 장소명을 표시합니다
    //     // mouseout 했을 때는 인포윈도우를 닫습니다
    //     function(marker: any, title: any) {
    //         kakao.maps.event.addListener(marker, 'mouseover', function() {
    //             displayInfowindow(marker, title);
    //         });

    //         kakao.maps.event.addListener(marker, 'mouseout', function() {
    //             infowindow.close();
    //         });

    //         itemEl.onmouseover =  function () {
    //             displayInfowindow(marker, title);
    //         };

    //         itemEl.onmouseout =  function () {
    //             infowindow.close();
    //         };
    //     }(marker, places[i].place_name);

    //     fragment.appendChild(itemEl);
    // }

    // // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    // listEl.appendChild(fragment);
    // menuEl.scrollTop = 0;

    // // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    // map.setBounds(bounds);
  }

  return (
    <>
      <HomeSideMenu searchPlaces={searchPlaces} />
      <HomeMapWrapper>
        <MapBox id='map' />
      </HomeMapWrapper>
    </>
  );
}

export default HomeLayout;
