import Button from './Button';
import qrCodeImg from '../assets/images/hero-image/QR-code.svg';
import styled from 'styled-components';

type DownloadDetailProps = {
  headerText: string;
  subHeaderText: string;
};
const DownloadLink = ({ headerText, subHeaderText }: DownloadDetailProps) => {
  return (
    <Wrapper>
      <div className='header'>
        <h4>{headerText}</h4>
        <p>{subHeaderText}</p>
      </div>
      <Button>Download App</Button>
      <img src={qrCodeImg} alt='QR code' />
    </Wrapper>
  );
};
export default DownloadLink;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3.56rem;

  .header {
    h4 {
      color: #000;
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 0.62rem;
    }
    p {
      color: #6c6c6c;
      font-family: var(--font-secondary);
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  img {
    width: 3.4375rem;
    height: 3.4375rem;
  }
`;
