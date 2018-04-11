import React, { Component } from 'react';

class KeyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move: "",
      pressed: {}
    };
    this.handleKey = this.handleKey.bind(this)
  }  

  handleKey(event){
    
    var pressed             = Object.assign({}, this.state.pressed); //creating copy of object    
    pressed[event.keyCode]  = (event.type === 'keydown');
    this.setState({pressed})
    
    if( pressed[37] || //left arrow
        pressed[39] || //right arrow
        pressed[38] || //up arrow
        pressed[40] || //down arrow
        (pressed[17] && pressed[65]) || //ctrl+a
        (pressed[17] && pressed[83]) || //ctrl+s
        (pressed[18] && pressed[65]) || //alt+a
        (pressed[18] && pressed[83]) || //alt+s
        pressed[112] || //F1
        pressed[113] || //F2
        pressed[114]    //F3
    ){
        this.writeAction(event)
    }      
  }
  
  writeAction(event){
    event.preventDefault();
    var move = (event.ctrlKey) ? "ctrl+"+event.key: (event.altKey) ? "alt+"+event.key : event.key;
    this.setState({move: this.state.move+move+"<br>"});
  }

  render() {   
    return (
    <div tabIndex ="0" style={{height: "300px"}} onKeyDown={this.handleKey} onKeyUp={this.handleKey}>
        <p>React Key Event</p>
        <p>Click on this area and try to move press Alt+A/S Ctrl+A/S, F1, F2, F3,  &#8592; &#8593; &#8594; &#8595;</p>
        <p dangerouslySetInnerHTML={{ __html:this.state.move}} readOnly></p>
    </div>
    ); 
  }
}

export default KeyEvent;
