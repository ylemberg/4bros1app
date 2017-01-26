import React from 'react';
import { Component } from 'react';

import Header from './header';

export default class AppMain extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
