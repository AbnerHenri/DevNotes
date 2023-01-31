import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={Styles.Page}>
      <StatusBar hidden={true}/>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Page : {
    flex : 1,

    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default App;
