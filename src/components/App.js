import { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Timer from './Timer';
import TimerSelect from './TimerSelect';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTimer: 'work', //'work', 'short' or 'long'
      title: 'Time to work!',
      interval: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.setInterval = this.setInterval.bind(this);
  }

  handleSelect(selectedTimer) {
    const { interval } = this.state;
    this.setState({ selectedTimer: selectedTimer });
    if (selectedTimer === 'work') {
      this.setState({ title: 'Time to work!' });
    } else {
      this.setState({ title: 'Take a break' });
    }
    clearInterval(interval);
  }

  setInterval(interval) {
    this.setState({ interval: interval });
  }

  render() {
    const { selectedTimer, title, interval } = this.state;
    return (
      <div className='h-screen App font-body'>
        <Header />
        <div className='flex items-center justify-center h-full'>
          <div className='px-8 py-8 mx-auto my-4 bg-black rounded-lg w-96 bg-opacity-5'>
            <h1 className='mb-4 text-2xl text-center text-gray-800 dark:text-gray-100'>
              {title}
            </h1>
            <TimerSelect handleSelect={this.handleSelect} />
            <Timer
              mode={selectedTimer}
              setInterval={this.setInterval}
              interval={interval}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
