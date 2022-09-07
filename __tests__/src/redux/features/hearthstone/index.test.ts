import {reducer, setLoading, setSearchText} from 'redux/features/hearthstone';
import {getAllCards} from 'redux/features/hearthstone/thunks';
import {
  cardMockData,
  cardResponseData,
  initialState,
  mechanicMockData,
} from '../../../../mocks/list.mocks';

describe('redux slice tests', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual(initialState);
  });

  it('should set searchText when setSearchText fired', () => {
    const searchTextShouldBe = 'someText';
    expect(reducer(undefined, setSearchText(searchTextShouldBe))).toEqual({
      ...initialState,
      searchText: searchTextShouldBe,
    });
  });

  it('should set loading when setLoading action fired', () => {
    const runLoadingTest = (isLoading: boolean) =>
      expect(reducer(undefined, setLoading(isLoading))).toEqual({
        ...initialState,
        loading: isLoading,
      });

    runLoadingTest(true);
    runLoadingTest(false);
  });

  it('should pending state when getAllCards pending', () => {
    expect(reducer(undefined, getAllCards.pending)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set error state when getAllCards rejected', () => {
    const action = {
      type: getAllCards.rejected.type,
      error: {message: 'some error occured'},
    };

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      error: action.error,
    });
  });

  it('should set states when getAllCards fulfilled', () => {
    const action = {
      type: getAllCards.fulfilled.type,
      payload: cardResponseData,
    };

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      cards: cardMockData,
      mechanics: mechanicMockData,
    });
  });
});
