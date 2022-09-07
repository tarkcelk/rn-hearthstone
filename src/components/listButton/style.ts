import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width / 2,
  height = 200;

export default StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'darkgray',
    borderRadius: 15,
  },
  text: {
    flex: 2,
    fontSize: 22,
  },
  imageContainer: {
    flex: 1,
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'stretch',
  },
});
