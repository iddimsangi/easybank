import React from 'react'
import img1 from "../../images/image-currency.jpg"
import img2 from "../../images/image-restaurant.jpg"
import img3 from "../../images/image-plane.jpg"
import img4 from "../../images/image-confetti.jpg"
import "./Latestarticle.scss"
function Latestarticle() {
    return (
        <div className="container">
            <h1>Latest Articles</h1>
            <div className="container-contents">
                <div className="container-contents--box">
                    <img src={img1} alt="alt1"/>
                    <cite>By Claire Robison</cite>
                    <h2>Receive money in any currency with no fees</h2>
                    <p>
                        The world is getting smaller and we're becomming more mobile. So why should you be forced to only receive money in a single...
                    </p>
                </div>
                <div className="container-contents--box">
                <img src={img2} alt="alt2"/>
                    <cite>By Wilson Hutton</cite>
                    <h2>Treat yourself without worrying about money</h2>
                    <p>
                        Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...
                    </p>
                    
                </div>
                <div className="container-contents--box">
                <img src={img3} alt="alt3"/>
                <cite>By Wilson Hutton</cite>
                <h2>Take your Easybank card wherever you go</h2>
                <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad.We'll even show you...</p>
                </div>
                <div className="container-contents--box">
                <img src={img4} alt="alt4"/>
                <cite>By Claire Robison</cite>
                <h2>Our invite-only Beta accounts are now live!</h2>
                <p>
                    After a lot of hard work by the whole team, we're excited to launch our closed beta.It's easy to request an invite through the site...
                </p>
                </div>
            </div>
        </div>
    )
}

export default Latestarticle
