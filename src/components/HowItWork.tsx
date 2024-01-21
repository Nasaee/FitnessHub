import styled from 'styled-components';
import SectionTitleMid from './SectionTitleMid';
import demoImg from '../assets/images/Demo.png';

const HowItWork = () => {
  return (
    <Section id='how-it-works'>
      <SectionTitleMid
        titleHeader='App Demo'
        titleHeightlight='View Our'
        title='App Demo'
      />
      <img src={demoImg} alt='Demo image' />
    </Section>
  );
};
export default HowItWork;

const Section = styled.section`
  margin-top: 3.12rem;
  max-width: 64.625rem;
  margin-inline: auto;

  img {
    margin-top: 1.88rem;
  }
`;
