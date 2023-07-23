import React from 'react';
import './skills.scss';

const SkillItem = ({ item }) => {
    const { name, icon, dots } = item;

    const dotList = []

    const dot = (
        <svg className="skills__dots--dot">
            <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
        </svg>
    )

    for (let i = 0; i < dots; i++) {
        dotList.push(dot)
    }

    return (
        <div className="skills__item">
            <div className="skills__tech">
                <svg className="skills__tech--icon">
                    <use xlinkHref={`../../icons.svg#${icon}`}></use>
                </svg>
            </div>
            <div className="skills__info">
                <span>{name}</span>
                <div className="skills__dots">
                    {dotList}
                </div>
            </div>
        </div>
    )
}

export default SkillItem
