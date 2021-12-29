import React, {useState} from 'react'

function useModal(props) {
    const [isModal, setIsModal] = useState(false);
    const [modalState, setModalState] = useState('transition');

    const showModal = (state) => {
        setIsModal(true);
        setModalState(state);
    }
    
    const hideModal = () => {
        setIsModal(false);
    }

    return [modalState, isModal, showModal, hideModal];
}

export default useModal