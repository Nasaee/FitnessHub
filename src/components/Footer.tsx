import styled from 'styled-components';
import logo from '../assets/images/Logo.svg';
import { BiLogoTwitter } from 'react-icons/bi';
import { GrFacebookOption, GrInstagram, GrGithub } from 'react-icons/gr';
import { IoMailOutline } from 'react-icons/io5';
import Cta from './Cta';

const Footer = () => {
  const companyLinks = [
    'Home',
    'Featured',
    'Services ',
    'Contact US',
    'About US',
  ];

  const helpLinks = [
    'Customer Support',
    'Delivery Details',
    'Terms & Conditions',
    'Privacy Policy',
  ];
  return (
    <Wrapper>
      <Cta />
      <div className='center'>
        <div className='content'>
          <div className='social'>
            <div className='brand'>
              <img src={logo} alt='app icon' />
              <p>
                <span>Fitness</span>
                &nbsp;Hub
              </p>
            </div>
            <p className='text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              qui maiores eveniet dolorum.
            </p>
            <ul className='social-list'>
              <li>
                <a href='#'>
                  <BiLogoTwitter />
                </a>
              </li>
              <li className='facebook'>
                <a href='#'>
                  <GrFacebookOption />
                </a>
              </li>
              <li>
                <a href='#'>
                  <GrInstagram />
                </a>
              </li>
              <li>
                <a href='#'>
                  <GrGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className='company'>
            <h5>Company</h5>
            <ul className='links'>
              {companyLinks.map((link) => {
                return <li>{link}</li>;
              })}
            </ul>
          </div>
          <div className='help'>
            <h5>Help</h5>
            <ul className='links'>
              {helpLinks.map((link) => {
                return <li>{link}</li>;
              })}
            </ul>
          </div>
          <div className='email-input'>
            <div className='relative'>
              <IoMailOutline />
              <input type='email' placeholder='Enter your email' />
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-container'>
        <p className='copyright'>
          <span>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by
          </span>
          <span className='brand'>Fitness Hub</span>
        </p>
        <div className='design-and-code'>
          <p>
            <span>Design by </span>
            <span className='emphasize'>
              <a href='https://www.figma.com/file/HRnOyRZELoYHBoLJov05i0/Fitness-Website-Landing-Page-(Community)?node-id=13%3A14307&mode=dev'>
                Figma Community
              </a>
            </span>
          </p>
          <p>
            <span>, Code by </span>
            <span className='emphasize'>Nasaee Madadam</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background: #2b2b2b;
  position: relative;
  padding-top: 16rem;

  .cta {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 64.0625rem;
  }

  .center {
    max-width: 1280px;
    margin-inline: auto;
    padding-bottom: 3rem;

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 3rem;

      .social {
        width: 13rem;
        .brand {
          display: flex;
          align-items: center;
          gap: 1.66rem;

          & p {
            color: #000;
            font-size: 1.17394rem;
            font-weight: 600;
            letter-spacing: 1px;

            & span {
              color: var(--clr-primary);
            }
          }
        }

        p.text {
          color: #fff;
          font-family: var(--font-3);
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.375rem;
          margin-block: 2rem;
        }

        ul.social-list {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        & li a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          width: 2rem;
          border: 1px solid #fff;
          border-radius: 50%;
          color: #fff;
          font-size: 13px;
        }

        & li.facebook a {
          background-color: #2563eb;
          border: transparent;
        }

        & li a:hover {
          color: var(--clr-primary);
          border-color: var(--clr-primary);
        }

        & li.facebook a:hover {
          color: var(--clr-primary);
          border-color: var(--clr-primary);
          background-color: transparent;
          border: 1px solid #fff;
        }
      }

      .company,
      .help {
        & h5 {
          color: var(--clr-primary);
          font-size: 0.8125rem;
          font-weight: 600;
          line-height: 1.125rem;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        ul.links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;

          & li {
            color: #fff;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.375rem;
          }
        }
      }

      .email-input {
        width: 25rem;
        .relative {
          position: relative;

          & svg {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.5rem;
            color: #adb5bd;
          }

          input {
            display: block;
            width: 100%;
            padding: 0.9rem 3rem;
            border: transparent;
            outline: none;
            border-radius: 0.75rem;
            background-color: #242424;
          }

          & input::placeholder {
            color: #ced4da;
          }

          & button {
            position: absolute;
            right: 3px;
            top: 50%;
            transform: translateY(-50%);
            width: 5.875rem;
            height: 2.25rem;
            background-color: var(--clr-primary);
            font-size: 0.875rem;
            font-weight: 600;
            color: #fff;
            letter-spacing: 1px;
            border-radius: 0.75rem;
            border: transparent;
            cursor: pointer;
          }
        }
      }
    }
  }

  .copyright-container {
    background-color: #fff;
    padding: 1rem;
    text-align: center;
    letter-spacing: 0.6px;

    p.copyright {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
      color: #6c6c6c;
      text-align: center;
      font-family: var(--font-secondary);
      font-size: 0.975rem;
      font-weight: 400;
      line-height: 1.375rem;

      & span.brand {
        color: var(--clr-primary);
        font-weight: 600;
      }
    }

    .design-and-code {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 8px;
      margin-top: 1rem;
      font-size: 0.975rem;
      font-weight: 600;
      color: #6c6c6ce2;
      letter-spacing: 1px;

      & span.emphasize {
        color: #4263eb;
        font-weight: 700;

        & a {
          text-decoration: none;
        }

        & a:active,
        a:visited {
          color: #4263eb;
        }
      }
    }
  }
`;
