import React from 'react';
import './contact.scss';
import Form from '../components/form/Form';

const ContactSection = () => {
  return (
    <>
        <section className="contact-section" id="contact">
            <div class="contact">
                <h2 className="contact__heading">Võta ühendust</h2>
                <Form />
            </div>
        </section>
    </>
  )
}

export default ContactSection
