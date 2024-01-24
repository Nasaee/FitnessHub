import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { features } from '../utils';
import { CiStar } from 'react-icons/ci';

const PersonalTrainer = () => {
  return (
    <Section>
      <SectionTitle
        titleHeader='Expert Trainer'
        titleHighlight='Empower Your Fitness'
        title='Your Personal Trainer'
      />
      <div className='trainer'>
        {features.slice(0, 3).map((feature) => {
          const { trainer, trainerImgUrl } = feature;

          return (
            <div key={trainer} className='card'>
              <img src={trainerImgUrl} alt={trainer} />
              <div className='content'>
                <div className='trainer-name'>
                  <h4>{trainer}</h4>
                  <p>Satisfied Trainee</p>
                </div>
                <div>
                  <div className='rating'>
                    <CiStar />
                    <span>5.0</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default PersonalTrainer;

const Section = styled.section`
  margin-block: 1.88rem;
  padding: 1.5rem;

  .trainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;

    .card {
      width: 19.0625rem;
      background: #f9fafb;
      border-radius: 0.3125rem;
      overflow: hidden;
      box-shadow: var(--shadow-1);
      transition: all 0.3s ease-in-out;

      & img {
        height: 12.3125rem;
        width: 100%;
        object-fit: cover;
      }

      .content {
        display: flex;
        justify-content: space-between;
        padding: 2.06rem 1.37rem;
        font-family: var(--font-secondary);

        .trainer-name {
          & h4 {
            color: #000;
            font-size: 1.125rem;
            font-weight: 600;
            letter-spacing: 0.00563rem;
          }

          & p {
            color: #6c6c6c;
            font-size: 0.875rem;
            font-weight: 500;
            letter-spacing: 0.00438rem;
            margin-top: 0.94rem;
          }
        }
      }

      .rating {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        svg {
          font-size: 1.5rem;
          color: #fbbc05;
        }
      }
    }

    .card:hover {
      box-shadow: var(--shadow-2);
      transform: scale(1.05);
    }

    @media (max-width: 695px) {
      justify-content: center;
    }
  }
`;
