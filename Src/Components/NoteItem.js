import React from 'react';
import styled from 'styled-components/native';
import { Container, Title } from './NoteStyle';

const Item = styled.TouchableOpacity`
    padding : 15px;
    background-color: #171717;
`

const Text = styled.Text`
    color : #FFF;
    font-size: 18px;
`

function NoteItem({ data, index, funcPress }) {
  return(
    <Item onPress={()=> funcPress(index)}>
        <Text>{data.title}</Text>
    </Item>
  );
}

export default NoteItem;