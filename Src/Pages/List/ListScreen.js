import React, { useLayoutEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


import { Page, Title, ContainerImage, Image } from './ListStyle'

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

  return(
    <Page>
        <Title>Hello List</Title>
        
    </Page>
  );
}

export default ListScreen;