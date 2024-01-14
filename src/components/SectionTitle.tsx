import styled from 'styled-components';

type TitleProp = {
  titleHeader: string;
  titleHighlight: string;
  title: string;
};

const SectionTitle = ({ titleHeader, titleHighlight, title }: TitleProp) => {
  return (
    <Wrapper>
      <p>
        <span className='dash'>-</span>
        <span className='title-header'>{titleHeader}</span>
      </p>
      <h2>
        <span>{titleHighlight}</span>
        <br />
        <span>{title}</span>
      </h2>
    </Wrapper>
  );
};
export default SectionTitle;

const Wrapper = styled.div`
  font-family: var(--font-secondary);
  p {
    font-size: 1.25rem;
    font-weight: 00;
    margin-bottom: 1.25rem;

    .dash {
      color: var(--clr-primary);
      margin-right: 4px;
    }

    .title-header {
      color: #000;
      letter-spacing: 0.00625rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;

    & span:first-child {
      color: var(--clr-primary);
      letter-spacing: 0.0075rem;
    }
  }
`;
