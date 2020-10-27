import React, {Component} from 'react'
import './CardList.css';
import Card from '../Card';

export default class CardList extends Component {

   
     render () {
        

      return  (
      <div className='card-list'>
        {this.props.cards.map((cardObj)=>{
          return (
          <Card 
          key={cardObj.id}
          imgSrc={cardObj.avatar}
          email={cardObj.email}
          userName={cardObj.first_name}
          userLastName={cardObj.last_name}

          />
        )})}
      </div>
      )
                
     }
   }