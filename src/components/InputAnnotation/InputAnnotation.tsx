import React, { FC } from "react";
import style from "./InputAnnotation.module.css";

export interface inputAnnotationConfig {
  annotationText?: string;
  darkmode?: boolean;
  state?: "default" | "hover" | "focus" | "error" | "disabled" | "error-focus";
}

const InputAnnotation: FC<inputAnnotationConfig> = ({
  annotationText,
  darkmode = false,
  state = "default",
}) => {
  if (!annotationText) return null;
  
  return (
    <div
      className={`${style.annotation} ${style.groupContainer}   ${state === "error" || state === "error-focus" ? style.error : ""} ${darkmode ? style.darkmode : ""}`}
    >
      {annotationText}
    </div>
  );
};

export default InputAnnotation;
