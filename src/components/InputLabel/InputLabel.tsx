import React, { FC, useState } from "react";
import style from "./InputLabel.module.css";
import { ReactComponent as Icon } from "../../assets/icons/Icon.svg";

export interface InputLabelConfig {
  isRequired?: boolean;
  isMarked?: boolean;
  labelText?: string;
  tooltip?: string;
  labelSize?: "sm" | "md";
  darkmode?: boolean;
  state?: "default" | "hover" | "focus" | "error" | "disabled" | "error-focus";
}

const InputLabel: FC<InputLabelConfig> = ({
  isRequired = false,
  isMarked = false,
  labelText = "Label",
  tooltip,
  labelSize = "md",
  darkmode = false,
  state = "default",
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupAsterisk, setShowPopupAsterisk] = useState(false);
  if(state === 'disabled'){
    tooltip = '';
    isMarked = true;
    isRequired = false;
  }
  return (
    <div
      className={`${darkmode ? style.darkmode : ""} ${style.label} ${
        labelSize === "md" ? "" : style.sm
      } ${style[state]}`}
    >
      {labelText}
      {isMarked ? (
        isRequired ? (
          <div
            className={style.asteriskContainer}
            onMouseEnter={() => setShowPopupAsterisk(true)}
            onMouseLeave={() => setShowPopupAsterisk(false)}
          >
            <div className={style.asterisk}>*</div>
            <div
              className={`${style.popupMessage} ${
                showPopupAsterisk ? style.show : ""
              } ${darkmode ? style.darkmodePopup : ""}`}
            >
              Required
            </div>
          </div>
        ) : (
          ""
        )
      ) : isRequired ? (
        " (required)"
      ) : (
        " (optional)"
      )}
      {tooltip ? (
        <div
          className={style.helpIconContainer}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <Icon className={style.Icon} />
          <div
            className={`${style.popupMessage} ${showPopup ? style.show : ""} ${darkmode ? style.darkmodePopup : ""}`}
          >
            {tooltip}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputLabel;
