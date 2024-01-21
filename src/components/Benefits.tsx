import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { benefits } from '../utils';

const Benefits = () => {
  return (
    <Section>
      <div className='features'>
        <SectionTitle
          titleHeader='Benefits of Fitness App'
          titleHighlight='Exclusive Benefits'
          title='of Fitness App'
        />
        <div className='left'>
          <p>
            Lorem Ipsum has been the industry's standard dummy
            <br />
            text ever since the 1500s, when an unknown printer took
          </p>
        </div>
      </div>
      <div className='features-provider'>
        <ul>
          {benefits.map((feature, i) => {
            const { icon, title, description } = feature;
            return (
              <li key={i}>
                <div className='icon-container'>
                  <img src={icon} alt={title} />
                </div>
                <h4 className='header'>{title}</h4>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};
export default Benefits;

const Section = styled.section`
  .features {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 2.59rem 1.5rem;

    .left {
      display: flex;
      align-items: center;
      p {
        display: inline-block;
        font-size: 0.875rem;
        padding: 0.625rem;
        border-left: 1px solid #000;
      }
    }
  }
  .features-provider {
    padding: 1.88rem;
    & ul {
      display: flex;
      justify-content: space-between;
      gap: 5rem;
      flex-wrap: wrap;

      & li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15rem;
        margin-inline: auto;

        .icon-container {
          display: grid;
          place-items: center;
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 50%;
          background-color: rgba(255, 121, 23, 0.1);
          margin-bottom: 1.88rem;
        }

        h4 {
          color: var(--clr-primary);
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 0.81rem;
        }

        p {
          color: #000;
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 400;
        }
      }
    }
  }
`;
