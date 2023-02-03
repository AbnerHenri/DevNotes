import React from 'react';
import styled from 'styled-components/native';
import { Container, Title } from './NoteStyle';

const Item = styled.TouchableOpacity`
    padding : 15px;
`

const Text = styled.Text`
    color : #FFF;
    font-size: 18px;

`

function NoteItem({ data, index, funcPress }) {
  return(
    <Item>
        <Text>{data.title}</Text>
    </Item>
  );
}

export default NoteItem;