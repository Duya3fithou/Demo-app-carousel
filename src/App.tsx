/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ActivityIndicator, LogBox, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'app-redux/store';
import { NavigationContainer } from '@react-navigation/native';
import 'utilities/i18next';
import { navigationRef } from 'navigation/NavigationService';
import Navigation from 'navigation/sence/RootSences';
import { RootSiblingParent } from 'react-native-root-siblings';
import APIProvider from 'utilities/context/APIProvider';

LogBox.ignoreAllLogs();

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <APIProvider>
                <RootSiblingParent>
                    <NavigationContainer ref={navigationRef}>
                        <Navigation />
                    </NavigationContainer>
                </RootSiblingParent>
            </APIProvider>
        </PersistGate>
    </Provider>
);

export default App;
