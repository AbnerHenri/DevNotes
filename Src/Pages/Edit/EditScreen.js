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

function EditScreen() {
    return (
        <Page>
            <Title>Hello Edit</Title>
        </Page>
    );
}

export default EditScreen;