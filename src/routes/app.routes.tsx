import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { Report } from '../screens/Report';
import { Detail } from '../screens/Detail';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name='home'
        component={Home}
      />

      <Screen 
        name='report'
        component={Report}
      />

      <Screen 
        name='detail'
        component={Detail}
      />
    </Navigator>
  )
}