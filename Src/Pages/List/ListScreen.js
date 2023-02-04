import React, { useLayoutEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Page, Text, ContainerImage, Image, List } from './ListStyle'
import { NoteContext } from '../../Contexts/NoteContext';

import NoteItem from '../../Components/NoteItem/NoteItem';

function ListScreen() {

    const { list } = useContext(NoteContext)
    const Navi = useNavigation()

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

    function handlePress(index) {
      Navi.navigate('EditNote', { key : index })
    }

  return(
    <Page>
      <List 
        data={list}
        renderItem={({index, item})=> (
          <NoteItem 
            title={item.title}
            index={index}
            navigate={handlePress}
          />
        )}
        keyExtractor={(index)=> index.toString()}
      />
    </Page>
  );
}

export default ListScreen;