import React from 'react'

import typeimg from '../images/type'
import tierimg from '../images/tiers'

import PropTypes from 'prop-types'




const TankCard = props => {

    /* {key: 'Pl14',name: '4TP',nation: 'poland',tier: 1,type: 'LT',row: 1,rating: 0, img: Pl14} */

    let typecode = props.tank.type;
    let tiercode = 't' + props.tank.tier;
    let cardClass = 'flex-row tankCard rating-' + props.tank.rating

    let gridStyle = {
        gridColumnStart: props.tank.tier,
        gridColumnEnd: props.tank.tier+1,
        gridRowStart: props.tank.row,
        gridRowEnd: props.tank.row+1,
    }

    return (
        <div className='' style={gridStyle}>
            <img className="tankimg" src={props.tank.img} alt={props.tank.name} />
            <div className={cardClass}>
                <img className="typeimg" src={typeimg[typecode]} alt={typecode} />
                <img className="tierimg" src={tierimg[tiercode]} alt={tiercode} />
                <p className="tankName">{props.tank.name}</p>
            </div>
        </div>
    )
}

TankCard.propTypes = {

}

export default TankCard
