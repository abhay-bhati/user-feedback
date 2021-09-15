import React, {useState} from 'react';

export const ModalContext = React.createContext();

export default function ModalProvider(props){

    const [modal, setModal] = useState(false);

    const modalHandler = (value) =>{
        setModal(value);
    } 

    const defValues = {
        modal:modal,
        setmodal:modalHandler
    }

    return (
        <ModalContext.Provider value={defValues}>
            {props.children}
        </ModalContext.Provider>
    )
};