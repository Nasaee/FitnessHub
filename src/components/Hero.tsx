import styled from 'styled-components';
import heroBg from '../assets/images/hero-image/hero-bg.png';
import appStore from '../assets/images/hero-image/App-Store.svg';
import playStore from '../assets/images/hero-image/Play-Store.svg';
import avartars from '../assets/images/hero-user';
import heroImg from '../assets/images/hero-image/hero-image.png';
import arrowDownIcon from '../assets/images/hero-image/arrow-down.svg';
import swirlingArrow from '../assets/images/hero-image/swirling-arrow.svg';
import FloatingInfo from './FloatingInfo';
import userIcon from '../assets/images/hero-image/user.svg';
import signalIcon from '../assets/images/hero-image/signal.svg';
import DownloadDetail from './DownloadDetail';
import DownloadLink from './DownloadLink';

const Hero = () => {
  return (
    <Section id='home'>
      <div className='hero-header'>
        {/* Left Side */}
        <img src={heroBg} alt='background' className='background' />
        <div className='hero-content'>
          <p className='sub-header'>
            <span>-</span>The Best Fitness & Workout App
          </p>
          <h1>
            <span>Your All-in-One</span>
            <br />
            <span>Fitness App</span>
          </h1>
          <p className='text'>
            Lorem Ipsum is simply dummy text of the printing and t ypesetting
            industry. Lorem Ipsum has been the industry 's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className='store'>
            <a href='#'>
              <img
                src={playStore}
                alt='google play store'
                className='play-store'
              />
            </a>
            <a href='#'>
              <img src={appStore} alt='apple store' className='app-store' />
            </a>
          </div>
          <div className='user-constainer'>
            <ul>
              {avartars.map((user, i) => (
                <li key={i} style={{ transform: `translateX(${i * -5}px)` }}>
                  <img src={user} alt='user' />
                </li>
              ))}
              <li className='plus'>+5</li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M8.00001 3.33331V12.6666M3.33334 7.99998H12.6667'
                    stroke='#98A2B3'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </li>
            </ul>
            <div className='worldwide-users'>
              <p>5M +</p>
              <p>Worldwide Users</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='hero-img'>
          <div className='main-img-container'>
            <img
              src={heroImg}
              alt='fitness hub application image'
              className='main-img'
            />
            <img
              src={swirlingArrow}
              alt='swirling arrow'
              className='swirling-arrow'
            />
            <FloatingInfo
              icon={signalIcon}
              textColor='#FF7917'
              className='workout-activity'
            >
              750+ Workout Activity
            </FloatingInfo>

            <FloatingInfo
              icon={userIcon}
              textColor='#5D2C02'
              iconBgColor='#5D2C02'
              className='personal-trainer'
            >
              1250+ personal traineers
            </FloatingInfo>
          </div>
        </div>
        <button className='arrow-down-btn'>
          <img src={arrowDownIcon} alt='arrow down' />
        </button>
      </div>
      {/* bottom */}
      <div className='download'>
        <div className='download-info'>
          <h2>
            Download Our <br />
            <span>Fitness App</span> Today!
          </h2>
          <p className='download-description'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>
          <p className='download-description last'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>
          <div className='detail'>
            <DownloadDetail
              headerText='5 Million+'
              subHeaderText='Worldwide Active Users'
            />
            <DownloadDetail headerText='1250+' subHeaderText='Trainer' />
            <DownloadDetail headerText='750+' subHeaderText='Workout' />
          </div>
        </div>
        <div className='download-app'>
          <DownloadLink headerText='For iOS' subHeaderText='iOS 15.6 +' />
          <DownloadLink
            headerText='For Android'
            subHeaderText='Android 8.6 +'
          />
        </div>
      </div>
    </Section>
  );
};
export default Hero;

// style
const Section = styled.section`
  min-height: calc(100vh - var(--nav-height));

  /* Left Side */
  .hero-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2.5rem;
    position: relative;

    img.background {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .hero-content {
      padding-block: 6.69rem;

      p.sub-header {
        color: #000;
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.00625rem;
        margin-bottom: 2.5rem;

        span {
          color: var(--clr-primary);
          text-align: center;
          font-size: 1.25rem;
          font-weight: 600;
          margin-right: 6px;
        }
      }
      h1 {
        color: #000;
        font-family: Clash Display;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 0.625rem;
        margin-bottom: 0.94rem;

        span:last-child {
          color: var(--clr-primary);
          font-size: 2.5rem;
          font-weight: 500;
        }
      }

      p.text {
        padding: 0.625rem;
        color: #000;
        font-size: 0.875rem;
        font-weight: 400;
        margin-bottom: 2.25rem;
      }

      .store {
        display: flex;
        gap: 1.19rem;
        margin-bottom: 1.25rem;

        & img.play-store {
          width: 12.625rem;
          height: 3.8125rem;
        }

        & img.app-store {
          width: 11.8125rem;
          height: 3.8125rem;
        }
      }

      .user-constainer {
        display: flex;
        gap: 1.19rem;

        ul {
          display: flex;

          li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 12.5rem;
            border: 1.5px solid #fff;
          }
          li.plus {
            transform: translateX(-35px);
            background-color: #fff;
            font-family: var(--font-1);
            font-size: 0.75rem;
            font-weight: 500;
          }
          & li:last-child {
            transform: translateX(-25px);
            border: 1px dotted rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
        }

        .worldwide-users {
          p {
            padding: 0.625rem;
          }
          p:first-child {
            color: #000;
            font-family: var(--font-secondary);
            font-size: 1rem;
            font-weight: 700;
          }

          p:last-child {
            color: #6c6c6c;
            font-size: 0.625rem;
            font-weight: 500;
          }
        }
      }
    }

    /* Right Side */
    .hero-img {
      .main-img-container {
        position: relative;

        img.main-img {
          padding-top: 0.6rem;
          height: auto;
          width: 100%;
        }
      }

      img.swirling-arrow {
        position: absolute;
        top: 0;
        left: 180px;
      }

      .workout-activity,
      .personal-trainer {
        position: absolute;
      }
      .workout-activity {
        right: -30px;
        top: 167px;
      }

      .personal-trainer {
        bottom: 142px;
        left: -10px;
      }
    }

    .arrow-down-btn {
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translateX(50%);

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: transparent;
      border-radius: 1.875rem 1.875rem 0rem 0rem;
      border-top: 1px dotted #5d2c02;
      border-right: 1px dotted #5d2c02;
      border-left: 1px dotted #5d2c02;
      outline: none;
      width: 3.1875rem;
      height: 4.375rem;

      img {
        width: 2.875rem;
        height: 2.875rem;
      }
    }
  }

  .download {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2.34rem;

    .download-info {
      padding-right: 2.34rem;
      h2 {
        color: #000;
        font-size: 1.5rem;
        font-weight: 500;

        & span {
          color: var(--clr-primary);
        }
      }

      p.download-description {
        padding: 0.26rem 0;
      }

      p.last {
        margin-bottom: 2.44rem;
      }

      .detail {
        display: flex;
        padding: 0.625rem 0rem;
        align-items: flex-start;
        gap: 4.375rem;
      }
    }

    div.download-app {
      justify-self: end;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6.25rem;
    }
  }

  @media (max-width: 867px) {
    .hero-header {
      grid-template-columns: 1fr;
    }

    .download {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 474px) {
    .detail {
      column-gap: 2rem !important;
    }
  }
`;
