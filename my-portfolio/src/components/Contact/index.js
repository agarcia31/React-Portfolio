import React, { useState } from 'react';
import axios from 'axios';

import { validateEmail } from '../../utils/helpers';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      axios
        .post('/api/contact', formState)
        .then((response) => {
          console.log('Email sent successfully');
          // Handle success, e.g., show a success message or reset the form
        })
        .catch((error) => {
          console.log('Failed to send email', error);
          // Handle error, e.g., display an error message
        });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="background-container bg-cover bg-center py-10">
      <div className="container mx-auto max-w-lg px-6">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name"  style={{ fontFamily: "Bitter", fontSize: "32px", color: " #145A32" }}>Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
              className="w-full p-2 rounded" style={{ background: "#D5F5E3", fontFamily: "Bitter", fontSize: "24px", color: " #145A32" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" style={{ fontFamily: "Bitter", fontSize: "32px", color: " #145A32" }}>Email address:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
              className="w-full p-2 rounded" style={{ background: "#D5F5E3", fontFamily: "Bitter", fontSize: "24px", color: " #145A32" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" style={{ fontFamily: "Bitter", fontSize: "32px", color: " #145A32" }}>Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
              className="w-full p-2 rounded" style={{background: "#D5F5E3", fontFamily: "Bitter", fontSize: "18px", color: " #145A32" }}
            />
          </div>
          {errorMessage && (
            <div>
               <p className="error-text" style={{ fontFamily: "Bitter", fontSize: "20px", color: "#00FF0F", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
              {capitalizeFirstLetter(errorMessage)}
            </p>
            </div>
          )}
          <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600" style={{ fontFamily: "Bitter", fontSize: "28px", color: " #145A32" }}>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

