import React, { Component } from 'react';
import Button from './Button';
import Progress from './Progress';
import {
  AiOutlinePause,
  AiFillCaretRight,
  AiOutlineReload,
} from 'react-icons/ai';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0,
      timeLeft: 0,
      isRunning: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.setState({ duration: 25 * 60 }, () =>
      this.setState({ timeLeft: this.state.duration })
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { mode } = this.props;

      if (prevProps.mode !== mode) {
        this.setState({ isRunning: false });
        let duration = 0;
        switch (mode) {
          case 'pomodoro':
            duration = 25;
            break;
          case 'short':
            duration = 5;
            break;
          case 'long':
            duration = 15;
            break;
          default:
            duration = 25;
            break;
        }
        this.setState({ duration: duration * 60 }, () =>
          this.setState({ timeLeft: this.state.duration })
        );
      }
    }
  }

  handleToggle() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    this.setState(
      ({ isRunning }) => ({ isRunning: !isRunning }),
      () => {
        if (this.state.isRunning) {
          const timerInterval = setInterval(() => {
            this.setState(
              ({ timeLeft }) => ({ timeLeft: --timeLeft }),
              () => {
                if (this.state.timeLeft === 0) {
                  this.stopTimer();
                  let notification = new Notification('Pomodoro Timer', {
                    icon: 'logo192.png',
                    body: 'Time is up!',
                  });
                  notification.onclick = function () {
                    notification.close();
                  };
                }
              }
            );
          }, 1000);
          this.props.setInterval(timerInterval);
        } else {
          this.stopTimer();
        }
      }
    );
  }

  stopTimer() {
    const { interval } = this.props;
    clearInterval(interval);
    this.setState({ isRunning: false });
  }

  handleReset() {
    const { interval } = this.props;
    clearInterval(interval);
    this.setState({ isRunning: false });
    this.setState({ timeLeft: this.state.duration });
  }

  addLeadingZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  render() {
    const { timeLeft, isRunning, duration } = this.state;
    const minutes = this.addLeadingZero(Math.floor(timeLeft / 60));
    const seconds = this.addLeadingZero(timeLeft % 60);

    return (
      <div className='flex flex-col items-center justify-center'>
        <div className='flex text-6xl text-gray-dark dark:text-white'>
          <span className='flex-shrink-0 w-20 text-right'>{minutes}</span>
          <span>:</span>
          <span className='flex-shrink-0 w-20 text-left'>{seconds}</span>
        </div>
        <Progress progress={(timeLeft * 100) / duration} />
        <div className='flex justify-between w-full'>
          <Button
            type={timeLeft === 0 ? 'disabled' : 'primary'}
            size='lg'
            shape='round'
            icon={isRunning ? <AiOutlinePause /> : <AiFillCaretRight />}
            onClick={this.handleToggle}
          >
            {isRunning ? 'Stop' : 'Play'}
          </Button>
          <Button
            type='primary'
            size='lg'
            shape='round'
            icon={<AiOutlineReload />}
            onClick={this.handleReset}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

export default Timer;
