import styled from 'styled-components/native';

export const Page = styled.View`
    flex : 1;
    background-color : #151515;
`

export const Title = styled.Text`
    font-size: 22px;
`

export const TitleInput = styled.TextInput`
    margin : 15px;
    width : 90%;
    color : #fff;
`

export const BodyInput = styled.TextInput`
    margin : 15px;
    transform : translateY(50px);
    color : #fff;
`

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 0px 15px 0px 10px;
`

export const ButtonImage = styled.Image`
    width: 30px;
    height : 30px;
`

export const DeleteButton = styled.TouchableOpacity`
    width: 100%;
    padding : 5px;
    justify-content: center;
    align-items: center;

    background-color: #F44336;

    position : absolute;
    bottom : 0px;
`

export const DeleteButtonText = styled.Text`
    font-size : 18px;
    color : #FFF
`