import React, { useEffect, useState } from "react";
import "./GameQuestion.css";

interface TimerProps {
  timerTrigger: number;
  noTime: () => void;
  isTimeVisible: boolean;
}

export const Timer: React.FC<TimerProps> = ({
  timerTrigger,
  noTime,
  isTimeVisible,
}) => {
  const [seconds, setSeconds] = useState(30);
  const [anim, setAnim] = useState(true);

  useEffect(() => {
    setSeconds(30);
    setAnim(!anim);
  }, [timerTrigger]);

  useEffect(() => {
    console.log(anim);
  }, [anim]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev: number) => prev - 1);
    }, 1000);

    if (seconds <= 0) {
      clearInterval(timer);
    }

    if (seconds === 0) {
      console.log("you lost game");
      noTime();
    }

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="Timer">
      {isTimeVisible ? (
        <>
          <div className="timer_time">
            <p>00 : {seconds < 10 ? `0${seconds}` : seconds}</p>
          </div>
          <div className="timer_bar">
            <div className={anim ? "timer_progress" : "timer_progress1"} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
