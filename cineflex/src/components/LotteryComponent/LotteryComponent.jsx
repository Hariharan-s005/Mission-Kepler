import React, { useState, useEffect } from "react";
import style from "./LotteryComponent.module.css";
import { lotterySectionConstants } from "../../constants/lotterySectionConstants";
import { loginFormConstants } from "../../constants/loginFormConstants";

export const LotteryComponent = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState(null);
  const [lotteryStatus, setLotteryStatus] = useState(false);
  const [isValidMobileNumberError, setValidMobileNumberError] = useState(false);

  const handleLotteryEvent = (event) => {
    event.preventDefault();
    if (mobileNumber.length !== 10) return;
    setMobileNumber("");
    parseInt(mobileNumber) % 2 === 0
      ? setLotteryStatus(true)
      : setError(lotterySectionConstants.UNLUCKY);
  };

  useEffect(() => {
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  const validateMobileNumber = (number) => {
    const numberRegex = lotterySectionConstants.NUMBER_REGEX;
    if (numberRegex.test(number)) {
      return true;
    }
    return false;
  };

  const handleMobileNumberValidation = (event) => {
    setMobileNumber(event.target.value);
    if (!validateMobileNumber(event.target.value)) {
      setValidMobileNumberError(true);
    } else {
      setValidMobileNumberError(false);
    }
  };

  const inputBorderStyle = {
    border: isValidMobileNumberError
      ? loginFormConstants.errorBorderStyle
      : loginFormConstants.normalBorderStyle
  };
  const invalidButton={
    cursor: isValidMobileNumberError ? "auto" :''
  };

  return (
    <div className={style["lottery-section"]}>
      {lotteryStatus ? (
        <div className={style["lucky-message-container"]}>
          <p className={style.luckyMessagetext}>
            {lotterySectionConstants.LUCKY_MESSAGE}
          </p>
        </div>
      ) : (
        <>
          <h2 className={style["lottery-text"]}>
            {lotterySectionConstants.lotteryText}
          </h2>
          <form onSubmit={handleLotteryEvent}>
            <div className={style["input-container"]}>
              <label htmlFor="mobile_number"></label>
              <input
                type="number"
                placeholder={lotterySectionConstants.inputPlaceholder}
                style={inputBorderStyle}
                onChange={handleMobileNumberValidation}
              />
              <button style={invalidButton}>{lotterySectionConstants.buttonText}</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LotteryComponent;
