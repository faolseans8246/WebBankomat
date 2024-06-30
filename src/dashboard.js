import React from "react";
import './dashboard.css'


import MainScreenPage from './container/mainScreen.jsx'
import LangScreen from "./container/LangScreen";
import AuthScreen    from "./container/authedintificate/UzbAuthScreen";
import HumoScreenMenuUzb from "./container/humo/HumoScreenMenuUzb";

const dasboardFunc = () => {
    return (

        <div className="dasboard-container">

            {/*<MainScreenPage />*/}
            {/*<LangScreen />*/}
            {/*<AuthScreen />*/}
            <HumoScreenMenuUzb />
        
        </div>

    )
}

export default dasboardFunc;