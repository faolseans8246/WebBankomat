
import React from "react";
import './HumoGet.css'

function humoGetUzbFunc() {
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
                                50 000
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                100 000
                            </div>
                        </a>
                    </div>

                    {/* ikkinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                500 000
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                1 000 000
                            </div>
                        </a>
                    </div>

                    {/* uchinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                2 000 000
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                4 000 000
                            </div>
                        </a>
                    </div>

                    {/* to'rtinchi qator */}
                    <div className="humo-get-cash-button-line">
                        <a href="#" className="humo-get-cash-button">
                            <div className="humo-get-cash-button-text">
                                Boshqa summa
                            </div>
                        </a>

                        <a href="#" className="humo-get-cash-button">
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