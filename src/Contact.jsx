import React from "react";
import styled from "styled-components";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
  {
    duration: 1000
  }
);

const Contact = () => {
  const Wrapper = styled.section`
 
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6759873448545!2d77.37411027519191!3d28.609495575677386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56226511421%3A0xe6139dfd7d44d4c4!2sR.K.%20Public%20School!5e0!3m2!1sen!2sin!4v1682681666673!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        data-aos-offset="250"
        referrerPolicy="no-referrer-when-downgrade"  data-aos="zoom-in"></iframe>

      <div className="container" data-aos="fade-down">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyalrqw"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
