import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Shortcuts, ShortcutManager } from 'react-shortcuts';


const keymap = {
  BOX: {
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
  }
}

const shortcutManager = new ShortcutManager(keymap)


class ReactShortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move: ""
    };
    this.handleMove = this.handleMove.bind(this)
  }  

  getChildContext() {
    return { shortcuts: shortcutManager }
  }    

  handleMove(action, event){
    event.preventDefault();
    this.setState({move: this.state.move+ action+"<br>"})
  }


  render() {
    return (
      <div>
        <Shortcuts name="BOX" handler={this.handleMove}> 
          <div style={{height: "300px"}}>
            <p>React Shortcuts</p>
            <p>Click on this area and try to press Alt+A/S Ctrl+A/S, F1, F2, F3,  &#8592; &#8593; &#8594; &#8595;</p>
            <p dangerouslySetInnerHTML={{ __html:this.state.move}} readOnly></p>
          </div>
        </Shortcuts>
      </div>
    );
  }
}

ReactShortcuts.childContextTypes = {
    shortcuts: PropTypes.object.isRequired
}

export default ReactShortcuts;
