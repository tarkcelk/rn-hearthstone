import React, {useEffect} from 'react';
import {Container, LoadingSpinner} from '../../components';
import {getAllCards} from '../../redux/features/hearthstone/thunks';
import {List as ResultList, SearchBar} from './views';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import style from './style';
import {selectLoading} from '../../redux/features/hearthstone/selects';

export default function List() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllCards());
  }, []);

  return (
    <Container style={style.container} testID="containerComponent">
      <SearchBar testID="searchBarView" />
      <ResultList testID="resultListView" />
      <LoadingSpinner testID="loadingSpinnerView" isLoading={loading} />
    </Container>
  );
}
