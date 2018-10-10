// Code CoordinatesButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist(event);
    setTimeout( () => { this.props.onDelayedClick( event ); },
     this.props.delay
   )
    
  }
}
