import React from 'react';
import './form.scss';

function Form() {
  return (
    <>
        <form action="#" class="form">
            <div className="form__group margin-right">
                <label for="name" className="form__label">Nimi</label>
                <input id="name" name="nimi" type="text" className="form__input" placeholder="Sisesta nimi" required />
                <span className="form__name">Nimi</span>
            </div>
            <div className="form__group">
                <label for="email" className="form__label">Email</label>
                <input id="email" name="Email" type="text" className="form__input" placeholder="Sisesta email" required />
                <span className="form__name">Email</span>
            </div>
            <div className="form__group--text">
                <label for="subject" className="form__label">Kirja sisu</label> 
                <textarea id="subject" className="form__text" name="sisu" cols="30" rows="10" placeholder="Kirja sisu" required></textarea>
                <span className="form__name">Kirja sisu</span>
            </div>
            
            <button className="btn btn__contact">
                <svg className="btn__contact--icon">
                    <use xlinkHref="icons.svg#icon-mail_outline"></use>
                </svg>
                <span>Saada kiri</span>
            </button>
        </form>
    </>
  )
}

export default Form
