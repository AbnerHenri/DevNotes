import React from 'react';
import styled from 'styled-components/native';
import StackNavigator from './Src/Navigators/StackNavigator';
import NoteProvider from './Src/Contexts/NoteContext';
import 'react-native-gesture-handler';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Page = styled.View`
  flex : 1;
`

const App = () => {

  return (
        <NavigationContainer>
          <NoteProvider>
            <Page>
              <StatusBar hidden={true}/>
              <StackNavigator />
            </Page>
          </NoteProvider>
        </NavigationContainer>
  );
};

export default App;
