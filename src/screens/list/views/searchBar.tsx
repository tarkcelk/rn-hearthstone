import {Button, Pressable, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from '../style';
import {useAppDispatch} from '../../../redux/hooks';
import {setSearchText} from '../../../redux/features/hearthstone';

let timeout: NodeJS.Timeout;

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    return () => {
      if (timeout) clearInterval(timeout);
    };
  }, []);

  const onChangeText = (text: string) => {
    setText(text);
    debounce(500).then(() => {
      dispatch(setSearchText(text));
    });
  };

  const onSearchClean = () => {
    setText('');
    dispatch(setSearchText(''));
  };

  const debounce = (ms: number) => {
    if (timeout) clearTimeout(timeout);
    return new Promise(resolve => {
      timeout = setTimeout(() => {
        resolve(0);
      }, ms);
    });
  };

  return (
    <View style={style.searchBarContainer}>
      <TextInput
        style={style.searchBar}
        placeholder={'Search for a card..'}
        placeholderTextColor="#fff"
        onChangeText={onChangeText}
        value={text}
      />
      {!!text && (
        <Pressable style={style.searchBarButton} onPress={onSearchClean}>
          <Text style={style.searchBarButtonText}>⨉</Text>
        </Pressable>
      )}
    </View>
  );
}
