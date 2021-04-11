import React, { Component } from 'react';

export default class Keypad extends Component {
    handleKeyUp = (e) => {
        console.log('Entering Password...')
    }

    render() {
        return (
            <input type='password' onKeyUp={this.handleKeyUp} />
        )
    }
}