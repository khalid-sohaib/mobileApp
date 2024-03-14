import 'react-native-gesture-handler';
import {  GluestackUIProvider,  } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigations/StackNavigator';
import MyDrawer from './src/navigations/MyDrawer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { FilterProvider } from './src/context/FilterContext';

const queryClient = new QueryClient();

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <FilterProvider>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </GluestackUIProvider>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>

    </FilterProvider>

  )
}
