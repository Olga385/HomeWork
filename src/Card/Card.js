import React, {Component} from 'react';

import './Card.css';

export default class Card extends Component {

   
     render () {
         
      return  (
          <div className='card'>
              <div>
                  <img src={this.props.imgSrc} alt=''/>
              </div>
              <div>
                  <span>Email:</span>
                  <span> {this.props.email}</span>
              </div>
              <div>
                  <span>Name:</span>
                  <span> {this.props.userName}</span>
              </div>
              <div>
                  <span>LastName:</span>
                  <span> {this.props.userLastName}</span>
              </div>
          </div>


      )
                
     }
   }