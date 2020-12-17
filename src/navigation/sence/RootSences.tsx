import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Host } from 'react-native-portalize';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/rootReducer';
import { APP_ROUTE } from '../config/routes';
import navigationConfigs from '../config/options';
import AuthStack from './AuthSences';
import MainTabContainer from './TabSences';

const MainStack = createStackNavigator();

const AppStack = () => (
    <Host>
        <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
            <MainStack.Screen name={APP_ROUTE.MAIN_TAB} component={MainTabContainer} />
        </MainStack.Navigator>
    </Host>
);

const Navigation: React.FunctionComponent = () => {
    return <AppStack />;
};

export default Navigation;
