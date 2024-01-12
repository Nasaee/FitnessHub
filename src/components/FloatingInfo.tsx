import styled from 'styled-components';

type FloatingInfoProps = {
  children: React.ReactNode;
  icon: string;
  iconBgColor?: string;
  textColor?: string;
  className?: string;
};
const FloatingInfo = ({
  children,
  icon,
  iconBgColor,
  textColor,
  className,
}: FloatingInfoProps) => {
  return (
    <Wrapper className={className}>
      <div className='icon-container' style={{ backgroundColor: iconBgColor }}>
        <img src={icon} />
      </div>
      <p style={{ color: textColor }}>{children}</p>
    </Wrapper>
  );
};
export default FloatingInfo;

// style

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.44rem 0.75rem 0.44rem 0.56rem;
  border-radius: 3.375rem;
  box-shadow: -4px 0px 50px 0px rgba(73, 73, 73, 0.25),
    0px 4px 50px 0px rgba(73, 73, 73, 0.25);
  background-color: #fff;

  .icon-container {
    display: grid;
    place-items: center;
    width: clamp(0.5rem, 2.5rem, 2.5rem);
    height: clamp(0.5rem, 2.5rem, 2.5rem);
    border-radius: 50%;
    background-color: #68dbff;

    img {
      width: 1rem;
      height: 0.8125rem;
    }
  }

  p {
    font-family: var(--font-secondary);
    font-size: 0.6875rem;
    font-weight: 700;
  }
`;
