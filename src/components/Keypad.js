import React from 'react';

class Keypad extends React.Component {
    state = {  }
    handlePassword= () => {
        console.log("Entering password...")
    }
    render() { 
        return (  
            <form>
                <input onKeyUp={this.handlePassword}type="password" />
            </form>);
    }
}

export default Keypad;