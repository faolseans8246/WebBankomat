import React from "react";
import './AuthScreen.css'

function authScreenFunc({setHumoChangePart}) {

    return (

        <div className="authscreen-container">

            <div className="auth-main-text">
                <h1 className="auth-text">
                    Karta parolini kiriting!
                </h1>
            </div>


            {/* PIN kodini maydoni */}
            <div className="auth-enterece-part">

                <div className="indivate-text">
                    <h2 className="indicate-card-enterece">PIN-Kodingiz: </h2>
                </div>

                <div className="auth-pin-place">
                    <form action="" className="auth-pin-form">

                        <input type="password" className="enterece-pin-here" placeholder="Kartangiz PIN kodini kiriting..."/>

                    </form>
                </div>

            </div>

            {/*  buttonlar oynasi bilan ishlash qismi  */}
            <div className="auth-place-buttons">

                <div className="auth-in-buttons">
                    <a href="#" onClick={() => setHumoChangePart('lang')} className="my-auth-buttons">
                        <div className="auth-place-text">
                            Orqaga
                        </div>
                    </a>
                </div>

                <div className="auth-in-buttons">
                    <a href="#" onClick={() => setHumoChangePart('humo-menu')} className="my-auth-buttons">
                        <div className="auth-place-text">
                            Ok
                        </div>
                    </a>
                </div>

                <div className="auth-in-buttons">
                    <a href="#" onClick={() => setHumoChangePart('main')} className="my-auth-buttons">
                        <div className="auth-place-text">
                            Kartani olish
                        </div>
                    </a>
                </div>

            </div>

        </div>

    )

}

export default authScreenFunc;