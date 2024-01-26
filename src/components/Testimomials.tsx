import styled from 'styled-components';
import SectionTitleMid from './SectionTitleMid';
import { nanoid } from 'nanoid';
import { testimonials } from '../utils';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PiQuotesFill } from 'react-icons/pi';
import { CiStar } from 'react-icons/ci';
import { useEffect, useState } from 'react';

type TSliderPosition = 'activeSlide' | 'nextSlide' | 'prevSlide';
type TSetSliderPosition = (itemIndex: number) => TSliderPosition;
const Testimomials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = testimonials.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index]);

  // useEffect(() => {
  //   const slider = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 4000);
  //   return () => clearInterval(slider);
  // }, [index]);

  const setSliderPosition: TSetSliderPosition = (itemIndex) => {
    let position: TSliderPosition = 'nextSlide';

    if (itemIndex === index) position = 'activeSlide';
    if (
      itemIndex === index - 1 ||
      (index === 0 && itemIndex === testimonials.length - 1)
    ) {
      position = 'prevSlide';
    }

    return position;
  };

  return (
    <Section>
      <SectionTitleMid
        titleHeader='Testimonials'
        titleFront='Our Featured'
        titleHeightlight='Testimonials'
      />

      <ul>
        {testimonials.map((item, itemIndex) => {
          const { userImg, userName, title, comment } = item;
          return (
            <li
              key={nanoid()}
              className={`testimonial ${setSliderPosition(itemIndex)}`}
            >
              <img src={userImg} alt={userName} />
              <h4>{userName}</h4>
              <h5>{title}</h5>
              <p className='rating'>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </p>
              <div className='comment-container'>
                <p>{comment}</p>
                <PiQuotesFill className='quote quote-top' />
                <PiQuotesFill className='quote quote-bottom' />
              </div>
            </li>
          );
        })}
        <button
          type='button'
          className='btn btn-prev'
          onClick={() => setIndex(index - 1)}
        >
          <IoIosArrowBack />
        </button>
        <button
          type='button'
          className='btn btn-next'
          onClick={() => setIndex(index + 1)}
        >
          <IoIosArrowForward />
        </button>
      </ul>
    </Section>
  );
};
export default Testimomials;

const Section = styled.section`
  margin-top: 3.12rem;
  padding: 2.8rem;

  ul {
    margin-inline: auto;
    margin-top: 8rem;
    width: 100%;
    height: 25rem;
    position: relative;

    & li.testimonial {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem;
      margin-inline: auto;
      opacity: 0;

      & img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      & h4 {
        color: #000;
        text-align: center;
        font-size: clamp(0.8rem, 1.5vw, 1.25rem);
        font-weight: 600;
        margin-top: 4rem;
        letter-spacing: 0.00625rem;
      }
      & h5 {
        color: #6c6c6c;
        text-align: center;
        font-family: var(--font-secondary);
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.00438rem;
        margin-top: 0.94rem;
      }

      .rating {
        display: flex;
        margin-top: 1rem;
        color: #fbbc05;
        font-size: 1.5rem;
      }

      .comment-container {
        position: relative;

        & p {
          color: #52525b;
          font-family: var(--font-secondary);
          text-align: center;
          font-size: clamp(0.75rem, 1.5vw, 1.25rem);
          font-weight: 400;
          line-height: 2.125rem;
          padding: 2rem;
        }

        .quote {
          position: absolute;
          font-size: 5rem;
          color: rgba(0, 0, 0, 0.089);
          z-index: -1;
        }

        .quote-top {
          top: -4rem;
          left: 3rem;
          transform: rotateY(180deg);
        }

        .quote-bottom {
          bottom: -4rem;
          right: 2rem;
        }
      }
    }

    & li.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }
    & li.nextSlide {
      transform: translateX(100%);
    }
    & li.prevSlide {
      transform: translateX(-100%);
    }

    .btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      border: transparent;
      cursor: pointer;

      & svg {
        width: 3rem;
        height: 3rem;
        color: rgba(255, 120, 23, 0.493);
      }
    }

    .btn:hover svg {
      color: var(--clr-primary);
    }

    .btn.btn-prev {
      left: 0;
    }

    .btn.btn-next {
      right: 0;
    }
  }

  @media (max-width: 580px) {
    & {
      padding: 1rem;
    }
    & img {
      width: 4rem;
      height: 4rem;
    }

    .comment-container {
      & p {
        padding: 1.2rem !important;
      }
    }
  }

  @media (max-width: 725px) {
    ul {
      height: 30rem;
    }
    & img {
      width: 3rem;
      height: 3rem;
    }
    & h4 {
      margin-top: 2rem;
    }

    .comment-container p {
      padding: 1rem;
    }
    .quote {
      font-size: 3rem !important;
    }
  }

  @media (max-width: 428px) {
    li {
      padding: 1.5rem !important;
    }
  }
`;
