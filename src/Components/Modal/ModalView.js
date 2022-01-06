import React, {useEffect} from "react"
import LoadingView from './LoadingView'
import TransitionScene from "./TransitionScene"
import StartScene from "./StartScene"
import EndScene from "./EndScene"
const ModalView = (props) => {


    function renderView() {
        switch (props.state) {
            case 'loading':
                return <LoadingView {...props}/>
            case 'end':
                //End screen for adventure
                return <EndScene {...props}/>
            case 'transition':
                //Transition screen for adventure
                return <TransitionScene {...props}/>
            case 'start':
                //Start screen for adventure
                return <StartScene {...props}/>
        }
    }

    return (
        renderView()
    )
}
export default ModalView