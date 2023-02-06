import { createContext, useState } from "react";

export const NoteContext = createContext({})

function NoteProvider({ children }) {

    const [list, setList] = useState([])

    return(
        <NoteContext.Provider value={{
            list, setList
        }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;