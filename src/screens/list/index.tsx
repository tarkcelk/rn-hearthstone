import React, {useEffect} from 'react';
import {Container, LoadingSpinner} from '../../components';
import {getAllCards} from '../../redux/features/hearthstone/thunks';
import {List as ResultList, SearchBar} from './views';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import style from './style';

export default function List() {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(getAllCards());
  }, []);

  return (
    <Container style={style.container}>
      <SearchBar />
      <ResultList />
      {loading ? <LoadingSpinner /> : <></>}
    </Container>
  );
}
