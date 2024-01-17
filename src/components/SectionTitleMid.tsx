import styled from 'styled-components';

type TitleProp = {
  titleHeader: string;
  titleHeightlight: string;
  title?: string;
  titleBottom?: string;
};

const SectionTitleMid = ({
  titleHeader,
  titleHeightlight,
  title,
  titleBottom,
}: TitleProp) => {
  return (
    <Wrapper>
      <p className='title-header'>
        <span>-</span>
        {titleHeader}
      </p>
      <h2>
        <span className='heigtlight'>{titleHeightlight}</span>&nbsp;
        <span>{title}</span>
        <br />
        <span>{titleBottom}</span>
      </h2>
    </Wrapper>
  );
};
export default SectionTitleMid;

const Wrapper = styled.div`
  text-align: center;
  p {
    color: #000;
    font-size: 1.25rem;
    letter-spacing: 0.00625rem;

    & span {
      color: var(--clr-primary);
      font-weight: 500;
      margin-right: 4px;
    }
  }

  h2 {
    color: #000;
    font-family: var(--clr-secondary);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0075rem;

    & span:first-child {
      color: var(--clr-primary);
      font-family: var(--font-2);
    }
  }
`;
