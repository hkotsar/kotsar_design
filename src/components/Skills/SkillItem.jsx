import React from 'react';
import './skills.scss';

const SkillItem = ({ item }) => {
    const { name, icon, dots } = item;

    const dot = (
        <svg className="skills__dots--dot">
            <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
        </svg>
    )

    return (
        <div className="skills__item">
            <div className="skills__tech">
                <svg className="skills__tech--icon">
                    <use xlinkHref={`../../icons.svg${icon}`}></use>
                </svg>
            </div>
            <div className="skills__info">
                <span>{name}</span>
                <div className="skills__dots">
                    
                </div>
            </div>
        </div>
    )
}

export default SkillItem
