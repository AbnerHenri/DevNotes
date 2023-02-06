import { createContext, useState } from "react";

export const NoteContext = createContext({})

function NoteProvider({ children }) {

    const [list, setList] = useState([
        // { title : 'First Note', body : 'Testing...' },
    ])

    return(
        <NoteContext.Provider value={{
            list, setList
        }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;