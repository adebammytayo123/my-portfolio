import React from "react";
import devices from "../utils/devices";
import styled from "styled-components";

const Contactme = () => {
  return (
    <ContactStyles id="contact-me">
      <ContactsHeading>
        <LineStyle></LineStyle>
        Contact Me
        <LineStyle></LineStyle>
      </ContactsHeading>
      <ContactBody>
        <ContactPara>
          Please feel free to contact me for an opportunity to work with you or
          you have a project you would want me to jump on. Hit the connect
          button to drop a message.
        </ContactPara>
        <ContactIcons>
          <Link href="mailto:adetayoadetokun@gmail.com">
            <svg
              id="Capa_1"
              enable-background="new 0 0 479.058 479.058"
              height="512"
              viewBox="0 0 479.058 479.058"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#F77E69" d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
            </svg>
          </Link>
          <Link href="linkedin.com/in/adetayo-adetokun-9357801bb">
          <svg
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#F77E69" d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
          </svg>
          </Link>
          <Link href="https://github.com/adebammytayo123">
            <svg viewBox="0 0 128 128">
              <g fill="#F77E69">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          </Link>
        </ContactIcons>
      </ContactBody>
    </ContactStyles>
  );
};

const ContactStyles = styled.div`
  height: 70vh;
  padding-top: 15rem;
  @media ${devices.mobile} {
    height: auto;
    padding-top: 5rem;
  }
`;

const ContactsHeading = styled.h1`
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--mainWhite);
  @media ${devices.mobile} {
    font-size: 2rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem !important;
  }
`;

const LineStyle = styled.div`
  background-color: var(--lightPeach);
  height: 0.1px;
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 7%;
  @media ${devices.mobile} {
    width: 15%;
  }
`;

const ContactBody = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  text-align: center;
  color: rgb(160, 174, 192);
  @media ${devices.mobile} {
    width: 80%;
  }
`;

const ContactPara = styled.p`
  line-height: 1.5rem;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
`;

const Link = styled.a`
  margin-right: 2rem;
  svg {
    width: 50px;
    height: 50px;
  }
`;

export default Contactme;
