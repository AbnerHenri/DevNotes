import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NoteItem from '../../Components/NoteItem';

import { Page, ContainerImage, Image, NoteList, Message, ImageMessage, Text } from './ListStyle'

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

    function handlePress(index) {
      Navi.navigate('EditNote', { key : index })
    }

  return(
    <Page>
        {List.length == 0  &&
          <Message>
            <ImageMessage source={require('../../Assets/task.png')} />
            <Text>Parece que você ainda não adicionou notas</Text>
          </Message>
        }

        {List.length > 0 && 
          <NoteList
            data={List}
            renderItem={({ item, index }) => (
              <NoteItem
                data={item}
                index={index}
                funcPress={handlePress}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        }

      
    </Page>
  );
}

export default ListScreen;