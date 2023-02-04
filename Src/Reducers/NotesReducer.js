const initialState = {
    List : [
        { title : 'First Note', body : 'Testing...' },
        { title: 'Second Note', body: 'Testing...' }
    ]
}

export default (state = initialState, action) => {
    // switch (action.type) {
    //     case 'ADD':
    //         state.note = 'Teste'
    //         break;
    
    //     default:
    //         break;
    // }
    return state
}