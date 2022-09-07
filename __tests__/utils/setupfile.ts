import 'react';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: mockedNavigate,
    }),
    useRoute: () => ({
      params: {name: 'Mechanic 1'},
    }),
  };
});
