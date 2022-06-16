import React from "react";
import Countdown from 'react-countdown';

const CountDown = () => {
    const renderer = ({ hours, minutes, seconds }) => {
        let digits = hours.toString().split('');
        let hourDigits = digits.map(Number)

        let digits1 = minutes.toString().split('');
        let minDigits = digits1.map(Number)

        let digits2 = seconds.toString().split('');
        let secDigits = digits2.map(Number)


        let hourCheck;
        if (hourDigits.length === 1) {
            hourCheck = (
                <>
                    <span>0</span>
                    <span>{hourDigits[0]}</span>
                </>
            )
        }
        else {
            hourCheck = (
                <>
                    <span>{hourDigits[0]}</span>
                    <span>{hourDigits[1]}</span>
                </>
            )
        }

        let minCheck;
        if (minDigits.length === 1) {
            minCheck = (
                <>
                    <span>0</span>
                    <span>{minDigits[0]}</span>
                </>
            )
        }
        else {
            minCheck = (
                <>
                    <span>{minDigits[0]}</span>
                    <span>{minDigits[1]}</span>
                </>
            )
        }

        let secCheck;
        if (secDigits.length === 1) {
            secCheck = (
                <>
                    <span>0</span>
                    <span>{secDigits[0]}</span>
                </>
            )
        }
        else {
            secCheck = (
                <>
                    <span>{secDigits[0]}</span>
                    <span>{secDigits[1]}</span>
                </>
            )
        }

        return (
            <div className={'count_down'}>
                <ul className='p-0'>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            {hourCheck}
                        </div>
                        <p>HOURS</p>
                    </li>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            {minCheck}
                        </div>
                        <p>MINUTES</p>
                    </li>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            {secCheck}
                        </div>
                        <p>SECONDS</p>
                    </li>
                </ul>
            </div>
        )
    };
    return (
        <Countdown
            date={Date.now() + 50000000}
            renderer={renderer}
        />
    )
}

export default CountDown;