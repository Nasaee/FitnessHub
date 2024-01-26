import styled from 'styled-components';
import appStore from '../assets/images/hero-image/App-Store.svg';
import playStore from '../assets/images/hero-image/Play-Store.svg';

const Cta = () => {
  return (
    <Section className='cta'>
      <p className='top'>Unlock your Fitness Potential: Your Workout Hub</p>
      <p className='cta-text'>Download the App Now !</p>
      <p className='text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        necessitatibus in rem molestiae dolor quaerat eum fuga voluptatibus
        maxime tenetur, saepe eaque excepturi dolorem voluptate aliquam itaque
        hic reprehenderit facere consectetur nihil. Id alias in mollitia quae
        corporis, molestiae laudantium!
      </p>
      <div className='store'>
        <a href='#'>
          <img src={playStore} alt='google play store' />
        </a>
        <a href='#'>
          <img src={appStore} alt='apple app store' />
        </a>
      </div>
    </Section>
  );
};
export default Cta;

const Section = styled.section`
  text-align: center;
  padding: 2.62rem;
  background-color: var(--clr-primary);
  border-radius: 1.875rem;
  z-index: 50;

  .top {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.00625rem;
  }

  .cta-text {
    color: #000;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-top: 1.56rem;
  }

  .text {
    color: #fff;
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    line-height: 1.5rem;
    max-width: 50rem;
    font-weight: 500;
    margin-top: 2rem;
    margin-inline: auto;
  }

  .store {
    display: flex;
    justify-content: center;
    gap: 1.19rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 780px) {
    .top {
      font-size: 1rem;
    }

    .cta-text {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 574px) {
    & {
      padding: 1.5rem;
    }
    .top {
      font-size: 0.9rem;
    }

    .cta-text {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    .cta-text {
      margin-top: 0.9rem;
    }

    .store {
      margin-top: 1.2rem;
    }
  }
`;
