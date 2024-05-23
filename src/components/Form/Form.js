import './Form.css';
import React, { useState } from 'react';

function ContactForm() {

    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
        setClicked(true)
    }

    const onClickFalseHandler = () => {
        setClicked(false)
    }

    if (clicked != true)
        return (
            <div className="Form">
                <div className='Kwadrat'>
                    <div className='Gora1'>
                        <p id='pytanko'>You have a question for us? Our operators are waiting for you...</p>
                        <p id='skontaktujsie'>Contact Us</p>
                    </div>
                    <div className='email'>
                        <p id='twojemail'>Your e-mail:</p>
                        <input type="email" placeholder='example@gmail.com' id='emailtext' />
                    </div>
                    <div className='wiadomosc'>
                        <p id='twojawiadomosc'>Your message:</p>
                        <textarea id='wiadomosctext' placeholder='Your message...' />
                    </div>
                    <div className='wyslijemail'>
                        <button id='guzikwyslij' onClick={onClickHandler}>Send e-mail</button>
                    </div>
                </div>
            </div>
        )
    else {
        return (
            <div className='wyslanie'>
                <p id='thankss'>Thank you for submitting your message!</p>
                <button className='guzikodnow' onClick={onClickFalseHandler}>Ok!</button>
            </div>
        )
    }
}

export default ContactForm;