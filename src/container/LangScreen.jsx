import React from "react";
import './LangScreen.css'

function langScreenFunc({setHumoChangePart}) {

    return (

        <div className="lang-screen-container">

            <div className="langscreen-main-text">
                <h1 className="lang-main-text">
                    O'zingizga zarur bo'lgan tilni tanlang!
                </h1>
            </div>

            <div className="lang-screen-etaps">

                {/* Birinchi etap qismi */}
                <div className="lang-etap-lines">
                    <div className="lang-in-etap">

                        <a href="#" onClick={() => setHumoChangePart('humo_auth')} className="lang-etap-button">
                            <div className="lang-in-text">
                                O'zbek tili
                            </div>
                        </a>

                    </div>

                    <div className="lang-in-etap">

                        <a href="#" className="lang-etap-button">
                            <div className="lang-in-text">
                                <del>Ingliz tili</del>
                            </div>
                        </a>

                    </div>
                </div>

                {/* Ikkinchi etap qismi */}
                <div className="lang-etap-lines">
                    <div className="lang-in-etap">

                        <a href="#" className="lang-etap-button">
                            <div className="lang-in-text">
                                <del>Rus tili</del>
                            </div>
                        </a>

                    </div>

                    <div className="lang-in-etap">

                        <a href="#" onClick={() => setHumoChangePart('main')} className="lang-etap-button">
                            <div className="lang-in-text">
                                Bosh ekran
                            </div>
                        </a>

                    </div>
                </div>

            </div>

        </div>

    )

}

export default langScreenFunc;