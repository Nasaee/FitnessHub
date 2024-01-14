import styled from 'styled-components';
import { activities } from '../utils';

const TextSlide = () => {
  return (
    <Section>
      <ul>
        <div>
          {activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </div>
      </ul>
    </Section>
  );
};
export default TextSlide;

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 3.875rem;
  background-color: #000;
  margin-block: 0.8rem;

  ul {
    width: 120%;
    background-color: #68dbff;
    transform: rotate(-2.3deg);
    padding-inline: 3rem;

    div {
      display: flex;
      align-items: center;
      gap: 3.75rem;
      justify-content: center;
      height: 3.875rem;

      animation: slide 10s infinite linear;

      & li {
        color: #fff;
        font-family: var(--font-secondary);
        font-size: 2rem;
        font-weight: 700;
        transform: rotate(-2.3deg);
      }
    }
  }

  @keyframes slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
