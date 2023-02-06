import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Page, TitleInput, BodyInput, Button, ButtonImage, DeleteButton, DeleteButtonText } from './EditStyle';

import { NoteContext } from '../../Contexts/NoteContext'

function EditScreen() {

    const Navi = useNavigation()
    const Route = useRoute()

    const { list, setList, EditList } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [status, setStatus] = useState('new')

    useEffect(()=>{
        if(Route.params?.key != undefined && list[Route.params.key]) {
            setStatus('edit')
            setTitle(list[Route.params.key].title)
            setBody(list[Route.params.key].body)
        }
    }, [])

    useLayoutEffect(()=>{
        Navi.setOptions({
            title : status == 'edit' ? 'Edit Note' : 'Create Note',
            headerRight : () => (
                <Button onPress={()=> handleSave()}>
                    <ButtonImage source={require('../../Assets/check.png')} />
                </Button>
            ),
            headerLeft : () => (
                <Button onPress={()=> handleClose()}>
                    <ButtonImage source={require('../../Assets/close.png')} />
                </Button>
            )
        })
    }, [status, title, body])

    function handleSave() {
        if(title != '' && body != ''){
            if(status == 'edit'){
                const newList = [...list]
                newList[Route.params.key] = { title : title, body : body }
                setList(newList)
                Navi.navigate('List')
            }else{
                setList([...list, { title : title, body : body}])
                Navi.navigate('List')
            }   
        }else{
            alert('Preencha todos os campos')
        }
    }

    function handleClose() {
        Navi.goBack()
    }

    function delButton() {
        let newList = [...list]
        let filtredList = newList.filter((item, index) => index != Route.params.key )
        setList(filtredList)
        Navi.navigate('List')
    }

    return (
        <Page>
            <TitleInput 
                placeholder={'Digite aqui o seu título'}
                placeholderTextColor={'#FFF'}
                style={{
                    borderBottomWidth : 1,
                    borderBottomColor : '#FFF'
                }}
                value={title}
                onChangeText={(e)=> setTitle(e)}
            />
            
            <BodyInput 
                placeholder={'Digite aqui suas anotações'}
                placeholderTextColor={'#aaa'}  
                value={body}
                onChangeText={(e)=> setBody(e)}  
            />


            {status == 'edit' &&
                <DeleteButton onPress={() => delButton()}>
                    <DeleteButtonText>Deletar</DeleteButtonText>
                </DeleteButton>
            }
        </Page>
    );
}

export default EditScreen;