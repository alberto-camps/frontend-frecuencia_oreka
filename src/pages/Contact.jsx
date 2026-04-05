import { useState } from "react";
import { useTranslation } from 'react-i18next';
import './Contact.css'

function Contact() {
    const { t } = useTranslation();
    const initialState = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formData, setFormData] = useState(initialState);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            const data = await response.json()
            console.log(data.message)
            
            const userName = formData.name
            setStatus('success');
            setTimeout(() => {
                setStatus(null);
                setFormData(initialState);
            }, 3000);

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'phone') {
            newValue = value.replace(/[^0-9]/g, '');
        }
        setFormData({
            ...formData,
            [name]: newValue
        })
    }

    return ( 
        <>
        <div className="contact-container">
            <h2>{t('contact_title')}</h2>
            <form onSubmit={handleSubmit}>
                <div className="nameForm">
                    <label htmlFor="name">{t('contact_name')}:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="emailForm">
                    <label htmlFor="email">{t('contact_email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="phoneForm">
                    <label htmlFor="phone">{t('contact_phone')}:</label>
                    <input
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="messageForm">
                    <label htmlFor="message">{t('contact_message')}:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? t('contact_sending') : t('contact_submit')}
                </button>

            </form>
            {status === 'loading' && <p>{t('contact_sending')}</p>}
            {status === 'success' && <p>{t('contact_success', { name: formData.name })}</p>}
            {status === 'error' && <p>{t('contact_error')}</p>}
        </div>
        </>
    );
}

export default Contact;