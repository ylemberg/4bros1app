import React from 'react'

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: 10
    };

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      this.props.timerDone('timeout');
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  }
}

module.exports = CountdownTimer;