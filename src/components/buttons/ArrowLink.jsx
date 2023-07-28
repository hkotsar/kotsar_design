import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './link.scss'

const ArrowLink = ({ text, url, hideSmallScreen }) => {
    

  return (
    <>
        <HashLink 
            to={url}  
            className={`arrow__link ${hideSmallScreen ? 'display__none' : ' ' }`}
            >
            <span>{text}</span>
            <svg className="arrow__link--icon">
                <use xlinkHref="../../icons.svg#icon-arrow-up-right2"></use>
            </svg>
        </HashLink>
    </>
  )
}

export default ArrowLink
