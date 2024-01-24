import styled from 'styled-components';
import { blogAndNews } from '../utils';
import { nanoid } from 'nanoid';
import { AiOutlineUser } from 'react-icons/ai';
import { PiCalendarThin } from 'react-icons/pi';
import Cta from './Cta';

const BlogAndNews = () => {
  return (
    <Section>
      <div className='section-title'>
        <p>
          <span className='dash'>-</span>
          <span className='title-header'>Blog And News</span>
        </p>
        <h2>
          Our Latest <span>Blog</span> & <span>News</span>
        </h2>
      </div>

      <ul>
        {blogAndNews.map((blog) => {
          const { imgUrl, category, title, auther, date } = blog;
          return (
            <li key={nanoid()}>
              <img src={imgUrl} alt={title} />
              <div className='content'>
                <p>{category}</p>
                <h5>{title}</h5>
                <div className='description'>
                  <div>
                    <AiOutlineUser />
                    <span>by {auther}</span>
                  </div>
                  <div>
                    <PiCalendarThin />
                    <span>{date}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Cta />
    </Section>
  );
};
export default BlogAndNews;

const Section = styled.section`
  padding: 1.5rem;
  position: relative;

  .section-title {
    font-family: var(--font-secondary);

    & p {
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

    & h2 {
      color: #000;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.0075rem;

      & span {
        color: var(--clr-primary);
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;

    li {
      width: 19.0625rem;
      background: #f9fafb;
      box-shadow: var(--shadow-1);
      transition: all 0.3s ease-in-out;

      img {
        height: 11.875rem;
        width: 100%;
        object-fit: cover;
      }

      .content {
        padding: 0.75rem;

        & p {
          color: var(--clr-primary);
          font-size: 0.875rem;
          font-weight: 00;
          letter-spacing: 0.00438rem;
        }

        h5 {
          color: #000;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.8px;
          padding-right: 2rem;
          margin-top: 1.25rem;
        }

        .description {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.94rem;

          & div {
            display: flex;
            align-items: center;
            gap: 0.88rem;
            color: #000;
            font-family: var(--font-secondary);
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 0.00375rem;

            & svg {
              font-size: 1rem;
            }
          }
        }
      }
    }

    li:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-2);
    }
  }

  @media (max-width: 695px) {
    ul {
      justify-content: center;
    }
  }
`;
