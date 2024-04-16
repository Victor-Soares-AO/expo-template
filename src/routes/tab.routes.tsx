import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Settings } from '@screens/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes(){
    return(
        <Navigator>
            <Screen 
                name='Home'
                component={Home}
            />

            <Screen 
                name='Settings'
                component={Settings}
            />
        </Navigator>
    )
}