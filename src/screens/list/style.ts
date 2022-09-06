import {StyleSheet} from 'react-native';

const margin = 15,
  borderRadius = 15;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#0a2dcc',
    height: 40,
    paddingHorizontal: 10,
    borderRadius,
    flex: 2,
    color: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    margin,
  },
  searchBarButton: {
    position: 'absolute',
    right: 0,
  },
  searchBarButtonText: {
    color: '#fff',
    top: 10,
    right: 10,
    fontSize: 22,
  },
  mechanicButtton: {
    backgroundColor: '#fff',
    padding: 15,
    margin,
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'darkgray',
    borderRadius,
  },
  mechanicButtonText: {
    fontSize: 22,
  },
});
