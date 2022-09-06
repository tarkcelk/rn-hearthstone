import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, List} from '../screens';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mechanics/Cards" component={List} />
      <Stack.Screen name="Detail" component={Detail} options={{headerBackTitleVisible: false}} />
    </Stack.Navigator>
  );
}
