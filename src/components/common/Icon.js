import React from "react";
import PropTypes from 'prop-types';
import Icons from "../../assets/icons/icons.svg"; // Path to your icons.svg

const Icon = ({className, name, color, width, height}) => (
    <div className={className}>
        <svg className={`icon icon-${name}`} fill={color} width={width} height={height}>
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
