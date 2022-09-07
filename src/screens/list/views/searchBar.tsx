import React, {useEffect, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useAppDispatch} from 'redux/hooks';
import {setSearchText} from 'redux/features/hearthstone';
import style from '../style';

type SearchBarProps = {
  testID: string;
};

let timeout: NodeJS.Timeout;

export default function SearchBar({testID}: SearchBarProps) {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    return () => {
      timeout && clearInterval(timeout);
    };
  }, []);

  const onChangeText = (text: string) => {
    setText(text);
    debounced(500).then(() => {
      dispatch(setSearchText(text));
    });
  };

  const onSearchClean = () => {
    setText('');
    dispatch(setSearchText(''));
  };

  const debounced = (ms: number) => {
    if (timeout) clearInterval(timeout);
    return new Promise(resolve => {
      timeout = setTimeout(() => {
        resolve(1);
      }, ms);
    });
  };

  return (
    <View style={style.searchBarContainer} testID={testID}>
      <TextInput
        style={style.searchBar}
        placeholder={'Search for a card..'}
        placeholderTextColor="#fff"
        onChangeText={onChangeText}
        value={text}
        testID="searchBarViewTextInput"
      />
      {!!text && (
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
