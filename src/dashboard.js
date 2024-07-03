import React, {useState} from "react";
import './dashboard.css'

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


import MainScreenPage from './container/mainScreen.jsx'
import LangScreen from "./container/LangScreen";
import AuthScreen    from "./container/authedintificate/UzbAuthScreen";
import HumoScreenMenuUzb from "./container/humo/HumoScreenMenuUzb";
import HumoCheckUzb      from "./container/humo/humoBalance/HumoCheckUzb";
import HumoBalanceUzb from "./container/humo/humoBalance/HumoBalanceUzb";
import HumoGetUzb from "./container/humo/humoGet/HumoGetUzb";
import HumoGetCheckReq from "./container/humo/humoGet/HumoGetCheckReq";

const dasboardFunc = () => {

    // create variables
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [humoChangePart, setHumoChangePart] = React.useState('main');

    const renderHumoPage = () => {

        switch (humoChangePart) {
            case 'main':
                return <MainScreenPage setHumoChangePart={setHumoChangePart} />;

            case 'lang':
                return <LangScreen setHumoChangePart={setHumoChangePart} />

            case 'humo_auth':
                return <AuthScreen setHumoChangePart={setHumoChangePart} />

            case 'humo-menu':
                return <HumoScreenMenuUzb setHumoChangePart={setHumoChangePart} />

            case 'humo-get-value':
                return <HumoBalanceUzb setHumoChangePart={setHumoChangePart} />

            case 'get-humo-cash':
                return <HumoGetUzb setHumoChangePart={setHumoChangePart} />

            default:
                return <MainScreenPage setHumoChangePart={setHumoChangePart} />
        }

    }


    return (



        <div className="dasboard-container">

            {renderHumoPage()}

            {/*<MainScreenPage/>*/}


            {/*<LangScreen/>*/}
            {/*<AuthScreen/>*/}

            {/*<HumoScreenMenuUzb/>*/}
            {/*<HumoCheckUzb/>*/}
            {/*<HumoBalanceUzb/>*/}
            {/*<HumoGetUzb/>*/}
            {/*<HumoGetCheckReq/>*/}

        </div>



)
}

export default dasboardFunc;