import React from "react";
import './HumoScreen.css'

function humoScreenUzbFunc({setHumoChangePart}) {

    return (

        <div className="humo-container">

            {/*  Asosiy oyna matn qismi  */}
            <div className="humo-main-text-top">
                <h1 className="humo-menu-taxt">
                    Humo kartangizda bajariladigan tranzaksiyalar turini tanlang
                </h1>
            </div>

            {/*  Tranzaksiyalar oynasi bilan ishlash  */}
            <div className="humo-tranzaction-part">

                <div className="humo-buttons-part">

                    {/*  birinchi qator  */}
                    <div className="humo-button-line">

                        <a href="#" className="humo-button-click">
                            <div className="humo-buttons">
                                <del>Karta sozlamalari</del>
                            </div>
                        </a>

                        <a href="#" onClick={() => setHumoChangePart('humo-get-value')} className="humo-button-click">
                            <div className="humo-buttons">
                                Karta balansi
                            </div>
                        </a>

                    </div>

                    {/*  ikkinchi qator  */}
                    <div className="humo-button-line">

                        <a href="#" className="humo-button-click">
                            <div className="humo-buttons">
                                <del>Pul o'tkazmasi</del>
                            </div>
                        </a>

                        <a href="#" onClick={() => setHumoChangePart('get-humo-cash')} className="humo-button-click">
                            <div className="humo-buttons">
                                Naqt pul olish
                            </div>
                        </a>

                    </div>

                    {/*  uchinchi qator  */}
                    <div className="humo-button-line">

                        <a href="#" onClick={() => setHumoChangePart('lang')} className="humo-button-click">
                            <div className="humo-buttons">
                                Orqaga
                            </div>
                        </a>

                        <a href="#" onClick={() => setHumoChangePart('main')} className="humo-button-click">
                            <div className="humo-buttons">
                                Kartani chiqarish
                            </div>
                        </a>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default humoScreenUzbFunc;