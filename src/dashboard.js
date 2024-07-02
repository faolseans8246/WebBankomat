import React from "react";
import './dashboard.css'


import MainScreenPage from './container/mainScreen.jsx'
import LangScreen from "./container/LangScreen";
import AuthScreen    from "./container/authedintificate/UzbAuthScreen";
import HumoScreenMenuUzb from "./container/humo/HumoScreenMenuUzb";
import HumoCheckUzb      from "./container/humo/humoBalance/HumoCheckUzb";
import HumoBalanceUzb from "./container/humo/humoBalance/HumoBalanceUzb";

const dasboardFunc = () => {
    return (

        <div className="dasboard-container">

            {/*<MainScreenPage />*/}
            {/*<LangScreen />*/}
            {/*<AuthScreen />*/}
            {/*<HumoScreenMenuUzb />*/}
            {/*<HumoCheckUzb />*/}
            <HumoBalanceUzb />
        
        </div>

    )
}

export default dasboardFunc;