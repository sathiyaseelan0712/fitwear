import React from 'react'
import Shop from '../pages/Shop'

import { Link } from 'react-router-dom'

const Cardscg = ({title}) => {
    return (

        <div className="cardscg">
            <h1>{title}</h1>
             <Link to ={`/Shop/?cg=${title}`} className="ShopNowcg">Shop Now</Link> {/*image is in app.css (381) */}
        </div>
    )
}

export default Cardscg
