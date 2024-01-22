import styled from 'styled-components';
import { TFeature } from '../utils';
import { FaRegStar } from 'react-icons/fa';
import { FaSignal } from 'react-icons/fa6';
import { MdOutlineTimer } from 'react-icons/md';
import { PiUsersThreeLight } from 'react-icons/pi';
import { useFormatPrice } from '../hook';

const Card = ({ feature }: { feature: TFeature }) => {
  const {
    imgUrl,
    activityName,
    description,
    price,
    type,
    star,
    activityAmount,
    activityDuration,
    users,
    trainer,
    trainerImgUrl,
  } = feature;
  return (
    <Wrapper>
      <img src={imgUrl} alt={`${activityName} image`} />
      <div className='detail'>
        <div className='header'>
          <div className='activity-name'>{`${activityName} | ${type}`}</div>
          <div className='star'>
            <FaRegStar />
            <span>{star}</span>
          </div>
        </div>
        <div className='description'>
          <p>{description}</p>
          <ul className='info'>
            <li>
              <FaSignal className='icon' />
              <span className='text'>{activityAmount} Activity</span>
            </li>
            <li>
              <MdOutlineTimer className='icon' />
              <span className='text'>{`${activityDuration.hr}h ${activityDuration.min}min`}</span>
            </li>
            <li>
              <PiUsersThreeLight className='icon' />
              <span className='text'>{users}</span>
            </li>
          </ul>
          <div className='line'></div>
          <div className='bottom'>
            <div className='trainer'>
              <img src={trainerImgUrl} alt='trainer image' />
              <span>{trainer}</span>
            </div>

            <p className='price'>{useFormatPrice(price)}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Card;

const Wrapper = styled.div`
  width: 19.0625rem;
  height: 31.375rem;
  background: #f9fafb;
  border-radius: 0.3125rem 0.3125rem 0rem 0rem;
  overflow: hidden;
  box-shadow: var(--shadow-1);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-2);
    transform: scale(1.05);
  }

  .detail {
    height: 50%;
    padding: 1.06rem;

    .header {
      display: flex;
      justify-content: space-between;

      .activity-name {
        color: var(--color-2, #ff7917);
        text-align: center;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.00438rem;
      }

      .star {
        font-family: var(--font-secondary);
        display: flex;
        gap: 0.62rem;

        svg {
          color: #fbbc05;
        }
      }
    }
    .description {
      margin-top: 1.88rem;

      & p {
        color: #000;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.005rem;
      }

      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.94rem;

        & li {
          display: flex;
          align-items: center;
          gap: 0.88rem;
          color: #000;
          text-align: center;
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.00375rem;
        }
      }

      .line {
        width: 80%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 1.88rem auto;
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .trainer {
          display: flex;
          align-items: center;
          gap: 0.75rem;

          & img {
            width: 2.625rem;
            height: 2.625rem;
            border-radius: 50%;
          }

          & span {
            color: #000;
            font-size: 0.875rem;
            font-weight: 500;
            letter-spacing: 2px;
          }
        }

        .price {
          color: var(--color-2, #ff7917);
          text-align: center;
          font-family: var(--font-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
        }
      }
    }
  }
`;
