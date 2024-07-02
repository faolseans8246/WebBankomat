import React from "react";
import './HumoBalanceUzb.css'

function humoBalanceUzbFunc() {
    return (
        <div className="humobalance-container">

            {/* Humo kartasini balansining text qismi bilan ishlash qismi */}
            <div className="humo-balance-show-main-text">
                <h1 className="humo-balance-main-text">
                    Humo kartangizning balansi
                </h1>
            </div>

            {/* Balance tekst qismi bilan ishlash */}
            <div className="humo-balance-screen-part">
                <div className="humo-balance-screen-blocks">
                    <div className="humo-balance-indicate-text">
                        <h1 className="humo-balance-text">
                            Karta balansi:
                        </h1>
                    </div>

                    <div className="humo-balance-value-text">
                        <h1 className="humo-balance-value-get">
                            0.0
                        </h1>
                    </div>

                    <div className="humo-balance-behind-value-indicate">
                        <h1 className="humo-vale-indicate-text">
                            So'm
                        </h1>
                    </div>
                </div>
            </div>

            {/* Karta balancini tekshirishda button qismi bilan ishlash */}
            <div className="humo-balance-show-buttons-part">
                <div className="humo-balance-buttons-part">
                    <a href="#" className="humo-balance-button-line-link">
                        <h1 className="humo-balance-buttons-text">
                            Menyuga qaytish
                        </h1>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default humoBalanceUzbFunc;