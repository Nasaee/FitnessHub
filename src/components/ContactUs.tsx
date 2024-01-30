import styled from 'styled-components';
import SectionTitleMid from './SectionTitleMid';
import Button from './Button';
import userImages from '../assets/images/contact-us';
import { nanoid } from 'nanoid';

const ContactUs = () => {
  return (
    <Section id='about'>
      <div className='center'>
        <SectionTitleMid
          titleHeader='Our Trainer'
          titleHeightlight='World-Class'
          title='Fitness'
          titleBottom='Trainers At Your Fingertips !'
        />
        <div className='contact-us'>
          <div className='content'>
            <h2 className='title'>Contact US</h2>
            <p className='text'>
              The most powerful finance software that connects with your
              financial accounts. Track spending and categorize expenses so you
              can see where your money is going.
            </p>
            <Button>Get Started</Button>
          </div>
          {userImages.map((image, i) => (
            <img
              key={nanoid()}
              src={image}
              alt='user image'
              className={`user user${i}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default ContactUs;

const Section = styled.section`
  margin-top: 3.12rem;

  .center {
    max-width: 58.43rem;
    margin-inline: auto;
    padding: 2rem;

    .contact-us {
      display: grid;
      place-items: center;
      margin-top: 1.88rem;
      height: 70vh;
      position: relative;

      & .content {
        display: flex;
        flex-direction: column;
        gap: 1.88rem;
        text-align: center;
        max-width: 31.6rem;

        h2.title {
          color: var(--clr-primary);
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 600;
        }

        p.text {
          color: #64748b;
          text-align: center;
          font-family: var(--font-2);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-weight: 400;
          line-height: 2rem;
        }

        button {
          align-self: center;
        }
      }
      img.user {
        position: absolute;
      }

      .user0 {
        top: 0;
        left: 200px;
        width: 8.125rem;
        height: 8.125rem;
        border-radius: 50%;
      }
      .user1 {
        top: 30px;
        right: 200px;
        width: 6.75rem;
        height: 6.75rem;
        border-radius: 50%;
      }
      .user2 {
        bottom: 120px;
        right: 0;
        width: 12.4375rem;
        height: 12.4375rem;
        border-radius: 50%;
      }
      .user3 {
        bottom: 0;
        right: 350px;
        width: 8.125rem;
        height: 8.125rem;
        border-radius: 50%;
      }
      .user4 {
        bottom: 50px;
        left: 100px;
        width: 6.6875rem;
        height: 6.6875rem;
        border-radius: 50%;
      }
      .user5 {
        left: 0;
        width: 10.875rem;
        height: 10.875rem;
        border-radius: 50%;
      }

      @media (max-width: 823px) {
        .user0 {
          width: calc(8.125rem / 1.5);
          height: calc(8.125rem / 1.5);
        }
        .user1 {
          width: calc(6.75rem / 1.5);
          height: calc(6.75rem / 1.5);
        }
        .user2 {
          width: calc(12.4375rem / 1.5);
          height: calc(12.4375rem / 1.5);
        }
        .user3 {
          width: calc(8.125rem / 1.5);
          height: calc(8.125rem / 1.5);
        }
        .user4 {
          width: calc(6.6875rem / 1.5);
          height: calc(6.6875rem / 1.5);
        }
        .user5 {
          width: calc(10.875rem / 1.5);
          height: calc(10.875rem / 1.5);
        }
      }

      @media (max-width: 733px) {
        .user1 {
          right: 10%;
        }
        .user3 {
          left: 50%;
        }
        .user5 {
          top: 80px;
        }
      }

      @media (max-width: 600px) {
        .user0 {
          left: 40%;
          width: calc(8.125rem / 2);
          height: calc(8.125rem / 2);
        }
        .user1 {
          width: calc(6.75rem / 2);
          height: calc(6.75rem / 2);
        }
        .user2 {
          bottom: 10%;
          width: calc(12.4375rem / 2);
          height: calc(12.4375rem / 2);
        }
        .user3 {
          width: calc(8.125rem / 2);
          height: calc(8.125rem / 2);
        }
        .user4 {
          left: 10%;
          width: calc(6.6875rem / 2);
          height: calc(6.6875rem / 2);
        }
        .user5 {
          width: calc(10.875rem / 2);
          height: calc(10.875rem / 2);
        }
      }
    }
  }
`;
