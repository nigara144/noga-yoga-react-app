import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import myImage1 from "../images/img-11.jpg"
import myImage2 from "../images/img-12.jpg"


function Cards() {
    return (
        <div className="cards">
            <h1>Check out this classes!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={myImage1}
                            text="Explore your inner self with yoga practice"
                            label="Yoga"
                            path="/yoga-cards"
                        />
                        <CardItem
                            src={myImage2}
                            text="Open yourself to new possibilities"
                            label="Flexibility"
                            path="/flexibility-cards"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
