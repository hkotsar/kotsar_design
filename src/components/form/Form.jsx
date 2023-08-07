import React, {useState} from 'react';
import './form.scss';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [statusEmail, setStatusEmail] = useState('');
    

    const handleSendEmail = (e) => {
        // create a new XMLHttpRequest
        const xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            setStatusEmail(xhr.responseText);
        });
        // open the request with the verb and the url
        xhr.open('GET', `https://kotsardesign.com/sendEmail.php?sendto=` + email + 
                                '&name=' + name + 
                                '&message=' + message);
        // send the request
        xhr.send();

        // reset the fields
        setEmail('');
        setName('');
        setMessage('');
        
        e.preventDefault();
    }

  return (
    <>
        <form onSubmit={handleSendEmail} className="form">
            <div className="form__group margin-right">
                <label for="name" className="form__label">Nimi</label>
                <input id="name" name="nimi" type="text" className="form__input" placeholder="Sisesta nimi" onChange={e => setName(e.target.value)} />
                <span className="form__name">Nimi</span>
            </div>
            <div className="form__group">
                <label for="email" className="form__label">Email</label>
                <input id="email" name="Email" type="text" className="form__input" placeholder="Sisesta email" onChange={e => setEmail(e.target.value)} />
                <span className="form__name">Email</span>
            </div>
            <div className="form__group--text">
                <label for="subject" className="form__label">Kirja sisu</label> 
                <textarea id="subject" className="form__text" name="sisu" cols="30" rows="10" placeholder="Kirja sisu" onChange={e => setMessage(e.target.value)}></textarea>
                <span className="form__name">Kirja sisu</span>
            </div>
            <div className="form__flex">
                <button className="btn btn__contact">
                    <svg className="btn__contact--icon">
                        <use xlinkHref="icons.svg#icon-mail_outline"></use>
                    </svg>
                    <span>Saada kiri</span>
                </button>
                <div className="form__message">
                    <span>{statusEmail ? statusEmail : null}</span>
                </div>
            </div>
            
        </form>
    </>
  )
}

export default Form
