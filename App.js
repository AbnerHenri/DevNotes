import React from 'react';
import styled from 'styled-components/native';
import StackNavigator from './Src/Navigators/StackNavigator';
import 'react-native-gesture-handler';


import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './Src/Store'


const Page = styled.View`
  flex : 1;
`

const App = () => {

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <Page>
            <StatusBar hidden={true}/>
            <StackNavigator />
          </Page>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
