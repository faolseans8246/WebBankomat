
import React from "react";
import './HumoGet.css'

function humoGetUzbFunc({setHumoChangePart}) {
    return (
        <div className="humo-get-container">

            {/* Text qismi bilan ishlash */}
            <div className="humo-get-cash-main-text">
                <h1 className="humo-get-cash-text">
                    Humo kartasidan pul chiqarish uchun qiymatni belgilang
                </h1>
            </div>

            {/* Buttonlar bilan ishlash qismi */}
            <div className="humo-get-cash-values">
                <div className="humo-get-cash-buttons">
                    {/* birinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>50 000</del>
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>100 000</del>
                            </div>
                        </a>
                    </div>

                    {/* ikkinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>500 000</del>
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>1 000 000</del>
                            </div>
                        </a>
                    </div>

                    {/* uchinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>2 000 000</del>
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>4 000 000</del>
                            </div>
                        </a>
                    </div>

                    {/* to'rtinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                <del>Boshqa summa</del>
                            </div>
                        </a>

                        <a href="#" onClick={() => setHumoChangePart('humo-menu')} className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                Orqaga
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default humoGetUzbFunc;