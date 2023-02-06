import React, { useLayoutEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Page, Text, ContainerImage, Image, List, Message, MessageImage } from './ListStyle'
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

    console.log(list.length)

  return(
    <Page>
      {list.length == 1 && 
        <List
          data={list}
          renderItem={({ index, item }) => (
            <NoteItem
              title={item.title}
              index={index}
              navigate={handlePress}
            />
          )}
          keyExtractor={(index) => index.toString()}
        />
      }

      {list.length == 0 && 
        <Message>
          <MessageImage source={require('../../Assets/task.png')} />
          <Text style={{ color : '#FFF'}} >Você não possui nenhuma nota</Text>
        </Message>
      }
    </Page>
  );
}

export default ListScreen;