import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import myImage1 from "../../images/yoga-3.PNG"
import myImage2 from "../../images/yoga-2.PNG"
import myImage3 from "../../images/yoga-1.PNG"


function YogaCards() {
    return (
        <div className="cards" >
            <h1 > Enjoy all yoga classes! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={myImage1}
                            text="Yoga for beginners"
                            label="Yoga"
                            path="/beginner-yoga"
                        />
                        <CardItem
                            src={myImage2}
                            text="Vinyasa Yoga"
                            label="Yoga"
                            path="/vinyasa-yoga"
                        />
                        <CardItem
                            src={myImage3}
                            text="Yoga for back pain"
                            label="Yoga"
                            path="/back-pain-yoga"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default YogaCards