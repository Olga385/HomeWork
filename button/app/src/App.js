import React, { Component } from 'react';
import MyBtn from './MyBtn';

export default class App extends Component {

  state = {
    inputData: '',
    isHeaderShown: false,
    textFromBtn: '',
  }

  inputHandler = ({ target }) => {
    this.setState({
      inputData: target.value
    })
  }

  btnHandler = () => {
    this.setState(() => {
      return {
        isHeaderShown: !this.state.isHeaderShown
      }
    })
  }

  appHeaderBtnHandler = (btnText) => {
    this.setState({
      textFromBtn: btnText
    })
  }

  render() {
    return (
      <>
        {
          this.state.isHeaderShown
            ? <h1 onChange={this.btnHandler}>{this.state.inputData}</h1>
            : null
        }
        <div>
          <input value={this.state.inputData} type='text' onChange={this.inputHandler} />
          
          <MyBtn additionalText={this.state.inputData} btnClick={this.btnHandler} />
        </div>
      </>
    )
  }
};
