import React from 'react';
import styled from 'styled-components/native';

const Page = styled.View`
    flex : 1;
    justify-content : center;
    align-items: center;
`

const Title = styled.Text`
    font-size: 22px;
`

function ListScreen() {
  return(
    <Page>
        <Title>Hello List</Title>
    </Page>
  );
}

export default ListScreen;