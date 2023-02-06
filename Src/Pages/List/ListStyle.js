import styled from "styled-components/native";

export const Page = styled.View`
    flex : 1;

    background: #0D0D0D;
`

export const Text = styled.Text`
    color : #fff;
    font-size: 18px;

    margin : 15px;
`

export const ContainerImage = styled.TouchableOpacity`
    flex : 1;
    margin-right: 15px;
    height : 100%;

    justify-content: center;
    align-items: center;
`

export const Image = styled.Image`
    width: 30px;
    height : 30px;
`

export const List = styled.FlatList`
`

export const Message = styled.View`
    justify-content: center;
    align-items: center;

    transform : translateY(180px)
`

export const MessageImage = styled.Image`
    width: 130px;
    height : 130px;
`
