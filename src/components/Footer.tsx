import styled from 'styled-components';
import Cta from './Cta';

const Footer = () => {
  return (
    <Wrapper>
      <Cta />
      <div className='center'>
        <div className='content'>
          <div className='about'>about</div>
          <div className='links'>links</div>
          <div className='help'>help</div>
          <div className='email-input'>email-input</div>
        </div>
        <div className='copyright'></div>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background: #2b2b2b;
  position: relative;

  .cta {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .center {
    max-width: 1280px;
    margin-inline: auto;
    padding-top: 16rem;

    .content {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      height: 40rem;

      .email-input {
        grid-column: span 2;
      }
    }
  }
`;
