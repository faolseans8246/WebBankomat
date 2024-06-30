import React from "react";
import './HumoScreen.css'

function humoScreenUzbFunc() {

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
                                Karta sozlamalari
                            </div>
                        </a>

                        <a href="#" className="humo-button-click">
                            <div className="humo-buttons">
                                Karta balansi
                            </div>
                        </a>

                    </div>

                    {/*  ikkinchi qator  */}
                    <div className="humo-button-line">

                        <a href="#" className="humo-button-click">
                            <div className="humo-buttons">
                                Pul o'tkazmasi
                            </div>
                        </a>

                        <a href="#" className="humo-button-click">
                            <div className="humo-buttons">
                                Naqt pul olish
                            </div>
                        </a>

                    </div>

                    {/*  uchinchi qator  */}
                    <div className="humo-button-line">

                        <a href="#" className="humo-button-click">
                            <div className="humo-buttons">
                                Orqaga
                            </div>
                        </a>

                        <a href="#" className="humo-button-click">
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