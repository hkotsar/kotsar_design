import React from 'react';
import { Link } from 'react-router-dom';
import './link.scss'

const ArrowLink = ({ text, url, hideSmallScreen }) => {
    

  return (
    <>
        <Link 
            to={url}  
            className={`arrow__link ${hideSmallScreen ? 'display__none' : ' ' }`}
            >
            <span>{text}</span>
            <svg className="arrow__link--icon">
                <use xlinkHref="../../icons.svg#icon-arrow-up-right2"></use>
            </svg>
        </Link>
    </>
  )
}

export default ArrowLink
