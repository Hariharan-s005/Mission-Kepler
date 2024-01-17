import { ERROR_MESSAGEWindowConstants } from "../../constants/errorMessageWindowConstants";
import style from "./ErrorMessageWindow.module.css";
export const ErrorMessageWindow = (props) => {
  return (
    <div>
      <div
        className={style["error-message-window-backdrop"]}
        onClick={props.onClose}
      />
      <div className={style["error-message-window-container"]}>
        <h2 className={style["error-message-title"]}>{props.title}</h2>
        <div className={style["error-message"]}>
          <p>{props.message}</p>
        </div>
        <div className={style["window-close"]}>
          <button type="button" onClick={props.onClose}>
            {ERROR_MESSAGEWindowConstants.CLOSE_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessageWindow;
