import { memo } from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type SelectDropdownProps = {
  icon: IconType;
  label: string;
  options: string[];
};

const SelectDropdown = ({
  icon: Icon,
  label,
  options,
}: SelectDropdownProps) => {
  return (
    <Wrapper>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <div className='select-container'>
        <Icon className='icon' />
        <select name={label.toLowerCase()} id={label.toLowerCase()}>
          <option value='all'>All</option>
          {options?.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Wrapper>
  );
};
const MemoizedSelectDropdown = memo(SelectDropdown);
export default MemoizedSelectDropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.31rem;

  label {
    color: #000;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .select-container {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    svg.icon {
      width: 1rem;
      height: 1rem;
    }

    select {
      font-family: var(--font-secondary);
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.08px;
      border: none;
      background-color: transparent;
      padding-right: 3.12rem;
      outline: none;
      width: 100%;
    }
  }
`;
