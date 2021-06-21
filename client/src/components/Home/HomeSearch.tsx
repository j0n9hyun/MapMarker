import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import HomeSearchList from './HomeSearchList';

function HomeSearch({ searchPlaces }: any) {
  const [value, setValue] = useState('');
  const onSubmit = (e: any) => {
    e.preventDefault();
    searchPlaces();
  };
  const onChangeSearch = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <SearchWrapper>
          <InputBox
            placeholder='입력해주세요'
            id='keyword'
            onChange={onChangeSearch}
            value={value}
          />
          <SearchButton id='keyword'>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
          </SearchButton>
        </SearchWrapper>
      </form>
      <FavoriteButton>즐겨찾기</FavoriteButton>
      <HomeSearchList />
    </>
  );
}

const FavoriteButton = styled.div`
  border: 1px solid red;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  height: 45px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const SearchIcon = styled.div`
  font-size: 1.5rem;
  color: gray;
  &:hover {
    color: #000;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  box-shadow: 0px 2px 10px -10px #000;
  outline: none;
  width: 90%;
  height: 45px;
  font-size: 1rem;
  padding-left: 10px;
`;

export default HomeSearch;
