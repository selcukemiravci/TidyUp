import React, { useEffect } from 'react';
import { getTimeString } from './ClockUtils.js'
import './Clock.css'

class Clock extends React.Component
{
    state = {
        time: getTimeString()
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: getTimeString(),
        });
    }

    render() {
        const styles = {
            position: 'absolute',
            top: -25,
            left: 350,
        }
        return <>
            <p id="clock" className="time" style={styles}>{getTimeString()}</p>
        </>
    }
}

export default Clock;