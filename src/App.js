import React, { Component } from 'react';
import Filter from './Filter';
import CardList from './CardList';

// const BASE_URL =

export default class App extends Component {

  state = {
    cards: [],
    filter: '',
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(data => data.json())
      .then(({ data }) => {
        this.setState(() => {
          return {
            cards: data
          }
        })
      })
  }

  onTypeHandler = ({ target }) => {

    this.setState(() => {
      return {
        filter: target.value
      }
    })

  }

  render() {
    return (
      <div id="app">
        <h1>My friends</h1>
        <div>{this.state.filter}</div>
        <Filter onTypeHandler={this.onTypeHandler} value={this.state.filter} />
        <CardList
            cards={this.state.cards.filter((item) => {
          return item.first_name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase())
            ? item
            : null
        })}
        />
        {<p></p>}
      </div>
    );
  }
}