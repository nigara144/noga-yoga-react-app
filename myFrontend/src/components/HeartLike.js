import React, { useState } from 'react'
import './HeartLike.css'
import { Link } from 'react-router-dom'
import Heart from "react-animated-heart"


function HeartLike() {
    const [isClick, setClick] = useState(false);
    return (
        <Link to='./sign-up' className='heart'>
            <Heart className="heart-btn" isClick={isClick} onClick={() => setClick(!isClick)} />
        </Link>
    )
}


export default HeartLike

