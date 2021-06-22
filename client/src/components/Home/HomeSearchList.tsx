import styled from 'styled-components';

function HomeSearchList({ searchPlaceList }: any) {
  return (
    <>
      {searchPlaceList
        ? searchPlaceList.map((data: any) => (
            <PlaceListBoxWrapper id='placesList'>
              <li>{data.place_name}</li>
              <li>{data.address_name}</li>
              <li>{data.phone}</li>
              <li>{data.place_url}</li>
              <li>{data.road_address_name}</li>
            </PlaceListBoxWrapper>
          ))
        : null}
      <div id='pagination'></div>
    </>
  );
}

const PlaceListBoxWrapper = styled.ul`
  border: 1px solid coral;
  border-radius: 5px;
  margin: 20px auto;
`;

export default HomeSearchList;
