import * as React from 'react';
import PropTypes from 'prop-types';
import {dataIcons} from "./dataIcon";

function GameIcon(
    {
        fill = '#000',
        fontSize = '2rem',
        icon,
    }
) {
    console.log(icon)
    return (
            <svg
                style={{
                    height: fontSize,
                    width: fontSize,
                    fill: fill,
                    color: 'red'
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <defs>
                    <linearGradient x1="0" x2="1" y1="1" y2="0">
                        <stop offset="0%" stopColor="#000" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#000" stopOpacity="1"/>
                    </linearGradient>
                </defs>
                <g transform="translate(0,0)">
                    <path
                        d={dataIcons[icon]}
                        fillOpacity="1"
                    />
                </g>
            </svg>
    )
}


GameIcon.propTypes = {
    /**
     * What background color to use
     */
    fill: PropTypes.string,
    /**
     * Icon name from 'Game Icon'
     */
    icon: PropTypes.string,
    /**
     * CSS size,
     */
    fontSize: PropTypes.string,
}

export default GameIcon
