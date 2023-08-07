import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="footer__content">
                <span className="footer__content--email">heiki.kotsar@voco.ee</span>
                <Link className="footer__content--link" target="_blank" to="https://drive.google.com/file/d/11M7s3uDMgYDSrGbfcOvVQvROroPgy-lR/view?usp=sharing">Vaata CV</Link>
            </div>
        </footer>
    </>
  )
}

export default Footer
