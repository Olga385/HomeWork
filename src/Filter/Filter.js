import React, {Component} from 'react'

export default class Filter extends Component {

  
   
     render () {
         return <input type='text' value={this.props.value} onChange={this.props.onTypeHandler} />
            
            
     }
   }