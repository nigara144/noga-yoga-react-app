import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import myImage1 from "../../images/flex-1.jfif"
import myImage2 from "../../images/flex-2.jpg"

function FlexibilityCards() {
    return (
        <div className="App">
            <h1> Enjoy all flexibility classes!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={myImage1}
                            text="Flexibility for beginners"

                            label="Flexibility"
                            path="/beginner-flex"
                        />
                        <CardItem
                            src={myImage2}
                            text="Flexibility for advanced"
                            label="Flexibility"
                            path="/advanced-flex"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default FlexibilityCards;
