import React from 'react';
import { Item, TextItem } from './Style';


function NoteItem({ title, index, navigate }) {
  return(
    <Item onPress={()=> navigate(index)}>
        <TextItem>{title}</TextItem>
    </Item>
  );
}

export default NoteItem;