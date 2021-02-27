import { Component } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

class ThemeToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(({ isToggled }) => ({ isToggled: !isToggled }));
    document.querySelector('html').classList.toggle('dark');
  }

  render() {
    const { isToggled } = this.state;
    return (
      <div
        className='flex items-center text-gray-800 dark:text-gray-100'
        onClick={this.handleToggle}
      >
        <input type='checkbox' name='toggle' className='hidden' />
        <label
          className='relative flex w-12 h-6 cursor-pointer select-none'
          htmlFor='toggle'
        >
          <span className='absolute top-0 left-0 w-full h-full bg-gray-800 rounded-full dark:bg-gray-100'></span>
          <span
            className={`absolute z-10 flex items-center justify-center w-6 h-6 transition-transform duration-300 ease-in-out transform ${
              isToggled ? 'translate-x-full' : 'translate-x-0'
            } bg-gray-100 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-100 rounded-full`}
          >
            {isToggled ? <BiMoon /> : <BiSun />}
          </span>
        </label>
      </div>
    );
  }
}

export default ThemeToggle;
