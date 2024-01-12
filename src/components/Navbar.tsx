import styled from 'styled-components';
import logo from '../assets/images/Logo.svg';
import { navLinks } from '../utils';
import Button from './Button';

const Navbar = () => {
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
  }
`;
