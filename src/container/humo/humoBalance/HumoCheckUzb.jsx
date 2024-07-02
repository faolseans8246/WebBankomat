import React from "react";
import './HumoChek.css'


function humoCheckUzbFunc() {
    return (
        <div className="humocheck-container">

            {/* Checkning text qismi bilan ishlsh */}
            <div className="humo-check-main-text">
                <h1 className="humocheck-text">
                    Tranzaksiya jarayonini tanlang
                </h1>
            </div>

            {/* Check buttonlari bilanishlash qismi */}
            <div className="humo-check-buttons">
                <div className="humocheck-buttons-lines">

                    {/* Birinchi qator */}
                    <div className="humo-chek-line">
                        <a href="#" className="humo-check-buttons-lines">
                            <div className="humo-check-buttons-text">
                                Check chiqarish
                            </div>
                        </a>

                        <a href="#" className="humo-check-buttons-lines">
                            <div className="humo-check-buttons-text">
                                Ekranga chiqarish
                            </div>
                        </a>
                    </div>

                    {/* Ikkinchi qator */}
                    <div className="humo-chek-line">
                        <a href="#" className="humo-check-buttons-lines">
                            <div className="humo-check-buttons-text">
                                Orqaga
                            </div>
                        </a>

                        <a href="#" className="humo-check-buttons-lines">
                            <div className="humo-check-buttons-text">
                                Kartani chiqarish
                            </div>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default humoCheckUzbFunc;