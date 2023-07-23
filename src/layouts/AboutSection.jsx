import React from 'react';
import './aboutsection.scss';
import SkillsList from '../components/Skills/SkillsList';

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
                <h2 className="heading-1 margin-top-32">Oskused</h2>
            </div>
            <div className="about__skills">
                <SkillsList />
            </div>
        </section>
    </>
  )
}

export default AboutSection
