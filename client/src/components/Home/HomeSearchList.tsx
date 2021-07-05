import styled from 'styled-components';

function HomeSearchList({ searchPlaceList }: any) {
  return (
    <>
      {searchPlaceList
        ? searchPlaceList.map((data: any) => (
            <PlaceListBoxWrapper id='placesList'>
              <PlaceListBoxTitle>
                {data.place_name ? data.place_name : null}
              </PlaceListBoxTitle>
              <PlaceListBoxAddress>
                {data.address_name ? data.address_name : null}
              </PlaceListBoxAddress>
              <PlaceListBoxPhone>
                {data.phone ? data.phone : null}
              </PlaceListBoxPhone>
              <PlaceListBoxUrl>
                {data.place_url ? data.place_url : null}
              </PlaceListBoxUrl>
            </PlaceListBoxWrapper>
          ))
        : null}
      <div id='pagination'></div>
    </>
  );
}

const PlaceListBoxWrapper = styled.ul`
  border-bottom: 1px solid #e1e1e1;
  margin: 20px auto;
  padding-bottom: 20px;
  line-height: 1.5;
`;

const PlaceListBoxTitle = styled.li`
  font-weight: bold;
`;

const PlaceListBoxAddress = styled.li`
  font-size: 0.8em;
`;
const PlaceListBoxPhone = styled.li`
  font-size: 0.8em;
`;
const PlaceListBoxUrl = styled.li`
  font-size: 0.8em;
`;

export default HomeSearchList;
