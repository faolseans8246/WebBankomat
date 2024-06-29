import React from "react";
import './mainScreen.css'
import '../general.css'

// Images
import HomoCardLogo from '../images/humoCardNick.jpeg'
import UzCardLogo from '../images/uzcardNick.jpeg'
import VicaCardLogo from '../images/visaCardNick.jpeg'
import UnionPayCardLogo from '../images/unionPayNick.jpeg'
import MasterCardLogo from '../images/masterCardNick.jpeg'
import NFCSytemLogo from '../images/NFSLogos.png'
import CardInBankOmat from '../images/CardInBankomat.png'

function mainScreenFunc() {

    return (

        <div className="main-screen-container">

            <div className="block-main-screen">
                {/* Coll center qismi bilan ishlash qismi */}
                <div className="top-screen-main">

                    <div className="call-text">
                        <h1 className="call-center-text">
                            Call-center: 
                        </h1>
                    </div>

                    {/* Coll center qismining telfon raqam qismi bilan ishlash */}
                    <div className="phone-number-call">
                        <h1 className="phone-number-text">
                            +(998 94) 281 - 82 - 46
                        </h1>
                    </div>
            
                </div>

                {/* Asosiy oynaning pastki asosiy blogi va bu yerda qismlar berilgan */}
                <div className="main-screen-main">

                    <div className="main-card-types">

                        {/* Cartalar bilan ishlash qismi */}
                        <a href="#" className="mainscreen-card-block">
                            <img src={HomoCardLogo} alt="" className="mainscreen-cards"/>
                        </a>

                        <a href="#" className="mainscreen-card-block">
                            <img src={UzCardLogo} alt="" className="mainscreen-cards"/>
                        </a>

                        <a href="#" className="mainscreen-card-block">
                            <img src={VicaCardLogo} alt="" className="mainscreen-cards"/>
                        </a>

                        <a href="#" className="mainscreen-card-block">
                            <img src={UnionPayCardLogo} alt="" className="mainscreen-cards"/>
                        </a>

                        <a href="#" className="mainscreen-card-block">
                            <img src={MasterCardLogo} alt="" className="mainscreen-cards"/>
                        </a>

                    </div>

                    <div className="main-screen-notes">

                        <div className="mainscreen-text-part">
                            <h1 className="mainscreen-notes-text">
                                Siz bu yerda karta bilan ishlash uchun kartangizni bankomatga tiqmaysiz,
                                balki ishlatiluvchi kartangizni tanlaysiz.
                                Ishlatmoqchi bo'lgan karta qismingizni yuqoridagi pozitsiyalardan biri orqali
                                belgilang va bank xizmatlaridan online foydalaning.
                            </h1>
                        </div>

                        <div className="mainscreen-image-part">
                            <img src={CardInBankOmat} alt="" className="mainscreen-warning-img"/>
                        </div>

                    </div>

                    {/* Bankomat tegishli bo'lgan bank qismi bilan ishlash */}
                    <div className="main-own-part">

                        <div className="mainscreen-bank-name">
                            <h1 className="main-bank-name">
                                Free Bank
                            </h1>
                        </div>

                        <div className="main-screen-nfs-img">
                            <img src={NFCSytemLogo} alt="" className="nfs-img-mainscreen"/>
                        </div>

                    </div>
                
                </div>
            </div>

        </div>

    )

}

export default mainScreenFunc;