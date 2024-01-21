import styled from 'styled-components';
import { nanoid } from 'nanoid';
import SectionTitleMid from './SectionTitleMid';
import { activities, trainers, priceRange, features } from '../utils';
import { RiTimerLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { LuCircleDollarSign } from 'react-icons/lu';
import SelectDropdown from './SelectDropdown';
import Button from './Button';
import Card from './Card';

const Featured = () => {
  return (
    <Section id='features'>
      <SectionTitleMid
        titleHeader='750+ Workout Activity'
        titleHeightlight='Our Featured'
        title='Workout'
      />
      <div className='form-container'>
        <form>
          <SelectDropdown
            icon={RiTimerLine}
            label='Category'
            options={activities}
          />
          <SelectDropdown
            icon={AiOutlineUser}
            label='Trainer'
            options={trainers}
          />
          <SelectDropdown
            icon={LuCircleDollarSign}
            label='Price Range'
            options={priceRange}
          />
          <div className='button-container'>
            <Button>Search</Button>
          </div>
        </form>
        <div className='activities'>
          {features.map((feature) => {
            return <Card key={nanoid()} feature={feature} />;
          })}
        </div>
      </div>
    </Section>
  );
};
export default Featured;

const Section = styled.section`
  margin-top: 3.12rem;
  padding: 2.8rem;

  .form-container {
    form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      justify-items: center;
      align-items: center;
      gap: 3rem;
      border: 4.5px solid var(--clr-primary);
      border-bottom: none;
      border-radius: 7px;
      margin-top: 1.88rem;
      padding: 2rem 2.62rem;

      .button-container {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    @media (max-width: 630px) {
      form {
        justify-items: stretch;
      }
    }
  }

  .activities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 1.88rem;
  }

  @media (max-width: 729px) {
    .activities {
      justify-content: center;
    }
  }
`;
