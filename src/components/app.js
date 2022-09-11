import React, { Component } from 'react';
import moment from "moment";

export default class app extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter fefefkem</h1>
        <h2>React Redux Routereefefe </h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
