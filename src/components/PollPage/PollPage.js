import './HomePage.less';
import React, { PropTypes } from 'react';
import io from 'socket.io-client';
import PollInput from './PollInput';
import PollResults from './PollResults';

class PollPage {
  getInitialState() {
    return {
      pollResults: {}
    };
  }

  componentDidMount() {
    this.socket = io();

    this.socket.on('PollResults', function(results){
      this.setState({ pollResults: results });
    });
  }

  handleOptionAdded(option) {
    this.socket.emit('PollOption', option);
  }

  handleVote(vote) {

  }

  render() {
    return (
      <div className="ContentPage">
        <PollInput optionAdded={this.handleOptionAdded} />
        <PollResults pollResults={this.props.pollResults} onVote={this.handleVote}/>
      </div>
    );
  }

}

export default PollPage;
