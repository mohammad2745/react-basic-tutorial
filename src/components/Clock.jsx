import React from 'react'

class Clock extends React.Component {
  state = { date: new Date(), locale: 'bn-BD' };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick =(e) => {
    e.preventDefault();
    this.setState({ locale: 'en-US' });
  }

  render() {
    const {date, locale} = this.state;
    return (
      <div>
        <h1>Hello world {date.toLocaleTimeString(locale)}</h1>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default Clock;