import styled from 'styled-components';
import logo from '../assets/images/Logo.svg';
import { navLinks } from '../utils';
import Button from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Nav>
      <div className='nav'>
        <a href='#' className='icon-constainer'>
          <img src={logo} alt='logo' />
          <span className='logo-text'>
            <span>Fitness</span>
            <span>Hub</span>
          </span>
        </a>
        <div className='nav-list-container'>
          <ul className='nav-list'>
            {navLinks.map((link) => {
              const { href, name } = link;
              return (
                <li key={name}>
                  <a href={href}>{name}</a>
                </li>
              );
            })}
          </ul>
          <Button>Get the App</Button>
        </div>

        <button className='menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {isMenuOpen && (
          <div className='menu-list'>
            <ul>
              {navLinks.map((link) => {
                const { href, name } = link;
                return (
                  <li key={name} onClick={() => setIsMenuOpen(false)}>
                    <a href={href} key={name}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button>Get the App</Button>
          </div>
        )}
      </div>
    </Nav>
  );
};
export default Navbar;

const Nav = styled.nav`
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.19rem 2.12rem;
    height: var(--nav-height);
    position: relative;

    .icon-constainer {
      display: flex;
      align-items: center;
      gap: 1.0625rem;
      text-decoration: none;

      img {
        width: 2.125rem;
        height: 1.4375rem;
      }

      .logo-text {
        display: inline-block;
        letter-spacing: 1.5px;
        span:first-child {
          color: #5d2c02;
          font-size: 1.25rem;
          font-weight: 600;
          margin-right: 0.1rem;
        }
        span:last-child {
          color: #000;
          font-size: 1.25rem;
          font-weight: 600;
        }
      }
    }

    .nav-list-container {
      display: flex;
      gap: 1.8125rem;

      ul.nav-list {
        display: flex;
        gap: 1.25rem;

        li {
          a {
            display: inline-block;
            text-decoration: none;
            color: #000;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.625rem;
            transition: var(--transition);
          }
          a:hover {
            color: var(--clr-primary);
          }
        }
      }
    }

    button.menu {
      width: 2rem;
      height: 2rem;
      border: transparent;
      outline: none;
      background-color: transparent;
      transition: 0.2s ease-in-out;

      & svg {
        width: 100%;
        height: 100%;
      }
    }

    button.menu:hover {
      color: var(--clr-primary);
    }

    .menu-list {
      position: absolute;
      bottom: 0;
      transform: translate(-40px, 100%);
      padding: 3rem;
      text-align: center;
      width: 110vw;
      background-image: linear-gradient(
          to right bottom,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url('/src/assets/images/menu-bg.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 999;

      & ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        font-size: 1.5rem;
        margin-bottom: 3rem;

        li a {
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #fff;
          transition: 0.2s ease-in-out;
        }

        li a:hover {
          color: var(--clr-primary);
        }
      }
    }

    @media (max-width: 1040px) {
      .nav-list-container {
        display: none;
      }
    }

    @media (min-width: 1040px) {
      .menu {
        display: none;
      }
      .menu-list {
        display: none;
      }
    }
  }
`;
