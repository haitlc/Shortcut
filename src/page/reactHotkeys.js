import React, { Component } from 'react';
import {HotKeys} from 'react-hotkeys';

// keymap can be optional, key can map in handler directly
const keymap = {
  'MOVE_LEFT':  ['left'],
  'MOVE_RIGHT': ['right'],  
  'MOVE_UP':    ['up'],
  'MOVE_DOWN':  ['down'],
  'ctrl_s':     ['ctrl+s'],
  'ctrl_a':     ['ctrl+a'],
  'alt_s':      ['alt+s'],
  'alt_a':      ['alt+a'],
  'f1':         ['f1'],
  'f2':         ['f2'],
  'f3':         ['f3']
};

class ReactHotkeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move: ""
    };
  }  
 
  writeAction(event){
    event.preventDefault()
    var move = (event.ctrlKey) ? "ctrl+"+event.key: (event.altKey) ? "alt+"+event.key : event.key;
    this.setState({move: this.state.move+ move+"<br>"});
  }


  render() {
    const handler = {
      'MOVE_LEFT':  (event) => this.writeAction(event),
      'MOVE_RIGHT': (event) => this.writeAction(event),
      'MOVE_UP':    (event) => this.writeAction(event),
      'MOVE_DOWN':  (event) => this.writeAction(event),
      'ctrl_s':     (event) => this.writeAction(event),
      'ctrl_a':     (event) => this.writeAction(event),
      'alt_s':      (event) => this.writeAction(event),
      'alt_a':      (event) => this.writeAction(event),
      'f1':         (event) => this.writeAction(event),
      'f2':         (event) => this.writeAction(event),
      'f3':         (event) => this.writeAction(event),
    }    
    return (
      <HotKeys keyMap={keymap} handlers={handler}>
          <div style={{height: "300px"}}>
            <p>React Hotkeys</p>
            <p>Click on this area and try to press Alt+A/S Ctrl+A/S, F1, F2, F3,  &#8592; &#8593; &#8594; &#8595;</p>
            <p dangerouslySetInnerHTML={{ __html:this.state.move}} readOnly></p>
          </div>
      </HotKeys>
    );
  }
}

export default ReactHotkeys;
