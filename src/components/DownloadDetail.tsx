import styled from 'styled-components';

type DownloadDetailProps = {
  headerText: string;
  subHeaderText: string;
};

const DownloadDetail = ({ headerText, subHeaderText }: DownloadDetailProps) => {
  return (
    <Wrapper>
      <h4>{headerText}</h4>
      <p>{subHeaderText}</p>
    </Wrapper>
  );
};
export default DownloadDetail;

// style
const Wrapper = styled.div`
  padding-right: 0.94rem;
  margin-block: 0.62rem;
  border-right: 1px solid #6c6c6c;
  h4 {
    color: var(--clr-primary);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.62rem;
  }
  p {
    color: #6c6c6c;
    font-family: var(--font-secondary);
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
