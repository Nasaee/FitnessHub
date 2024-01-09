import styled from 'styled-components';

const Hero = () => {
  return <Section>Hero</Section>;
};
export default Hero;

const Section = styled.section`
  height: calc(100vh - var(--nav-height));
  background-image: url('../assets/images/hero-bg.png');
`;
