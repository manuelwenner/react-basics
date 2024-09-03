import React from 'react';

class DancingEmoji extends React.Component {

    constructor() {
        super();
        this.state = { status: 'at the bar' };
    }

    changeStatus = () => {
        if (this.state.status === 'at the bar') {
            this.setState({
                status: 'dancing'
            })
        } else {
            this.setState({
                status: 'at the bar'
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Hi, I'm  {this.state.status}</h2>
                <button onClick={this.changeStatus}>wechseln</button>
            </div>
        );
    }
}

export default DancingEmoji;