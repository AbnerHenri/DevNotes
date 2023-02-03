import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NoteItem from '../../Components/NoteItem';

import { Page, ContainerImage, Image, NoteList, Text } from './ListStyle'

function ListScreen() {

    const Navi = useNavigation()
    const List = useSelector(state => state.Notes.List)

    useLayoutEffect(()=>{
      Navi.setOptions({
        title : 'Your Notes',
        headerRight : () => (
          <ContainerImage onPress={()=>{Navi.navigate('EditNote')}}>
            <Image source={require('../../Assets/button.png')}/>
          </ContainerImage>
        )
      })
    }, [])

    function handlePress() {
      console.log('Teste')
    }

  return(
    <Page>
        <NoteList 
          data={List}
          renderItem={({item, index}) => (
            <NoteItem 
              data={item}
              index={index}
              funcPress={handlePress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        
    </Page>
  );
}

export default ListScreen;