import React from "react";
import './HumoGetCheckReq.css'

function humoGetCheckReqFunc() {
    return (
        <div className="humo-get-check-req-container">

            <div className="humo-get-check-req-part">

                {/* Tranzaksiya so'rovi tekst qismi */}
                <div className="humo-get-req-main-texts">
                    <h1 className="humo-get-req-text-part">
                        Tranzaksiya uchun chek talab qilinsinmi?
                    </h1>
                </div>

                {/* Tranzaksiya jarayoni buttonlari */}
                <div className="humo-get-req-buttons-part">
                    <a href="#" className="humo-get-req-button-link">
                        <div className="humo-get-req-button-text">
                            Ha
                        </div>
                    </a>

                    <a href="#" className="humo-get-req-button-link">
                        <div className="humo-get-req-button-text">
                            Yo'q
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default humoGetCheckReqFunc;