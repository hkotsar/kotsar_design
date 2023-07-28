import React from 'react';
import { Link } from 'react-router-dom';
import './landpage.scss';
import bg1 from '../assets/bg_illustration-1.svg';
import bg2 from '../assets/bg_illustration-2.svg';
import bg3 from '../assets/bg_illustration-3.svg';
import ArrowLink from '../components/buttons/ArrowLink';

function Landpage() {
  return (
    <div className="landpage" id="landpage">
        <div className="landpage__content">
            <h1 className="title">Heiki Kotsar</h1>
            <div className="landpage__texts">
                <h2>UX/UI disainer /</h2>
                <h2>Front-end arendaja</h2>
            </div>
            <div className="landpage__links">
                <Link className="btn" to="/">Vaata CV</Link>
                <ArrowLink text={"Projektid"}  url={"/projektid/ux-ui-disain#ux-ui"} hideSmallScreen={true}/>
            </div>
            <div className="landpage__techs">
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-figma"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-html5"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-css3"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-javascript"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-react"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-node-dot-js"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-wordpress"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-adobephotoshop"></use>
                    </svg>
                </div>
                <div className="tech">
                    <svg className="tech--icon">
                        <use xlinkHref="../../icons.svg#icon-adobeillustrator"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div className="landpage__bg">
            <img className="landpage__bg--item item-1" src={bg1} alt="bg-1" />
            <img className="landpage__bg--item item-2" src={bg2} alt="bg-2" />
            <img className="landpage__bg--item item-3" src={bg2} alt="bg-2" />
            <img className="landpage__bg--item" src={bg3} alt="bg-3" />
        </div>
    </div>
  )
}

export default Landpage
