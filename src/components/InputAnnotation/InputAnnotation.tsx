import React, { FC } from "react";
import style from "./InputAnnotation.module.css";

export interface inputAnnotationConfig {
  labelPosition?: "left" | "top";
  annotationText?: string;
  darkmode?: boolean,
  state?: 'default' | 'hover' | 'focus' | 'error' | 'disabled' | 'error-focus';
}

const InputAnnotation: FC<inputAnnotationConfig> = ({
  labelPosition = "top",
  annotationText,
  darkmode = false,
  state = 'default',
}) => {

  if (!annotationText) return null;
  console.log(state)
  return (
    <div
      className={`${style.annotation} ${style.groupContainer} ${
        labelPosition === "left" ? style.leftLabel : ""
      }  ${state === 'error' || state === 'error-focus' ? style.error : ""} ${darkmode? style.darkmode : ''}`}
    >
      {annotationText}
    </div>
  );
};

export default InputAnnotation;
