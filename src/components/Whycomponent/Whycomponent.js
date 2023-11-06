import React from 'react'
import "./Whycomponent.scss"
import online from "../../images/icon-online.svg"
import budget from "../../images/icon-budgeting.svg"
import onboard from "../../images/icon-onboarding.svg"
import openApi from "../../images/icon-api.svg"
function Whycomponent() {
    return (
        <div className="whyContainer">
            <div className="whyContainer-heading">
            <h1>Why choose Easybank? </h1>
            <span>We leverage Open Banking to turn your bank account into your financial hub.<br/> Control your financial like never before.</span>
            </div>
          
            <div className="whyContainer-body">
                <div className="whyContainer-body--box">
                    <img src={online} alt=""/>
                <h3>Online Banking</h3>
                <p>
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
                </div>
                <div className="whyContainer-body--box">
                <img src={budget} alt=""/>

                <h3>Simple Budgeting</h3>
                <p>
                    See exactly where your money goes each month.Receive notifications when you're close to hitting your limits.
                </p>
                </div>
                <div className="whyContainer-body--box">
                <img src={onboard} alt=""/>

                <h3>Fast Onboarding</h3>
                <p>
                    We don't do branches.Open your account in minutes online and start taking control of your finances right away.
                </p>
                </div>
                <div className="whyContainer-body--box">
                <img src={openApi} alt=""/>

                <h3>Open API</h3>
                <p>
                    Manage your savings, investments,pension, and much more from one account.Tracking your money has never been easier.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Whycomponent
