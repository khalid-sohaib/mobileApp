import 'react-native-gesture-handler';
import {  GluestackUIProvider,  } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/components/navigations/StackNavigator';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </GluestackUIProvider>

  )
}
