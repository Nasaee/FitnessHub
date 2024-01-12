import styled from 'styled-components';

type BtnProps = {
  children: string;
};

const Button = ({ children }: BtnProps) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Button;

const Wrapper = styled.button`
  padding: 0.625rem 1.25rem;
  background: var(--clr-primary);
  border: transparent;
  outline: none;
  border-radius: 1.875rem;
  color: #fff;
  text-align: center;
  font-family: var(--font-secondary);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.00469rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary);
    background: #fff;
    box-shadow: inset 0 0 0 1px var(--clr-primary);
  }
`;
