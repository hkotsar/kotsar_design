import React from 'react';
import './aboutsection.scss';


function AboutSection() {
  return (
    <>
        <section className="about" id="aboutme">
            <div className="about__content">
                <h2 className="heading-1">Enesetuvustus</h2>
                <p className="paragraph">
                    Minu nimi on Heiki Kotsar, olen 24-aastane ning mulle pakub huvi UX/UI disain ning veebiarendus. Õpin praegu Tartu Rakenduslik Kolledž-is esimest aastat UX/UI disaini nooremspetsialisti erialal. Varasemalt olen Tartu Kutsehariduskeskuses (Uue nimega Tartu Rakenduslik Kolledž) õppinud Noorem tarkvaraarendaja erialal. 
                    Veebiarendust õppides sain proovida nii front-end kui ka back-end arendust ning sain aru, et front-end ja disain on peamised, mis pakuvad mulle rohkem huvi. 
                    Seetõttu otsustasin hakata õppima kasutajaliidese disaini. Peale disaini ja arenduse on mul hobiks veel investeerimine ning kauplemine futuuridega ehk siis vabal ajal jälgin börsi graafikuid ja õpin tehnilist analüüsi.
                </p>
                
                <div className="about__skills">
                    <h2 className="heading-1">Oskused</h2>
                    <div className="skills">
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-figma"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>Figma</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-html5"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>HTML</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-css3"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>CSS/SASS</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-javascript"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>Javacript</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-react"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>React.js</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-node-dot-js"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>Node.js/Express.js</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-wordpress"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>Wordpress</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-php"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>PHP</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-adobephotoshop"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>Photoshop</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__tech">
                                <svg className="skills__tech--icon">
                                    <use xlinkHref="../../icons.svg#icon-adobeillustrator"></use>
                                </svg>
                            </div>
                            <div className="skills__info">
                                <span>Illustrator</span>
                                <div className="skills__dots">
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                    <svg className="skills__dots--dot">
                                        <use xlinkHref="../../icons.svg#icon-dot-circle-o"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutSection
