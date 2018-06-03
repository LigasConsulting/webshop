import React from "react";
import PropTypes from 'prop-types';
import Icons from "../../assets/icons/icons.svg"; // Path to your icons.svg

const Icon = ({name, color, size, top, left,right}) => (
    <div className={'position-absolute'} style={{top:`${top}vh`,left:`${left}vw`,right:`${right}vw`}}>
        <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
            <use xlinkHref={`${Icons}#icon-${name}`}/>
        </svg>
    </div>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number
};

export default Icon;
