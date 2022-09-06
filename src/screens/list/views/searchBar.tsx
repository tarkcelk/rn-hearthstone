import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {setSearchText} from '../../../redux/features/hearthstone';
import style from '../style';
import {selectSearchText} from '../../../redux/features/hearthstone/selects';

type SearchBarProps = {
  testID: string;
};

export default function SearchBar({testID}: SearchBarProps) {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectSearchText);

  const onChangeText = (text: string) => {
    dispatch(setSearchText(text));
  };

  const onSearchClean = () => {
    dispatch(setSearchText(''));
  };

  return (
    <View style={style.searchBarContainer} testID={testID}>
      <TextInput
        style={style.searchBar}
        placeholder={'Search for a card..'}
        placeholderTextColor="#fff"
        onChangeText={onChangeText}
        value={searchText}
        testID="searchBarViewTextInput"
      />
      {!!searchText && (
        <Pressable
          style={style.searchBarButton}
          onPress={onSearchClean}
          testID="searchBarViewCleanButton">
          <Text style={style.searchBarButtonText}>⨉</Text>
        </Pressable>
      )}
    </View>
  );
}
