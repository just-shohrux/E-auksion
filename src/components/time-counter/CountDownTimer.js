import { useState, useEffect } from "react";
import styled from "styled-components";
import { getRemainingTimeUntilMsTimestamp } from "./Utils";

const CountDownTimerStyle = styled.div`
  .countdown-timer {
    display: flex;
    justify-content: space-between;
  }
  .countdown-timer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .timer-top {
    border: none;
    padding: 0;
    width: 70px;
    margin-bottom: 0;
    font-size: 60px;
    color: #023581;
    font-weight: bold;
    border-radius: unset;
    text-shadow: 0px 8px 6px rgb(4 0 67 / 36%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timer-bottom {
    text-transform: uppercase;
    margin-bottom: 0;
    font-weight: bold;
    color: #023581;
    font-size: 10px;
  }
  @media screen and (max-width: 1800px) {
    .timer-top {
      font-size: 30px;
    }
  }
`;

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <CountDownTimerStyle>
      <div className="countdown-timer">
        <div className="countdown-timer-item">
          <div className="timer-top">
            <p>{remainingTime.days}</p>
            <p>:</p>
          </div>
          <div className="timer-bottom">
            <p>days</p>
          </div>
        </div>
        <div className="countdown-timer-item">
          <div className="timer-top">
            <p>{remainingTime.hours}</p>
            <p>:</p>
          </div>
          <div className="timer-bottom">
            <p>hours</p>
          </div>
        </div>
        <div className="countdown-timer-item">
          <div className="timer-top">
            <p>{remainingTime.minutes}</p>
            <p>:</p>
          </div>
          <div className="timer-bottom">
            <p>minutes</p>
          </div>
        </div>
        <div className="countdown-timer-item">
          <div className="timer-top">
            <p>{remainingTime.seconds}</p>
          </div>
          <div className="timer-bottom">
            <p>seconds</p>
          </div>
        </div>
      </div>
    </CountDownTimerStyle>
  );
};

export default CountdownTimer;
