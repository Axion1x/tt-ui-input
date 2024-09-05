import React, { FC } from "react";
import InputLabel, { InputLabelConfig } from "../InputLabel/InputLabel";
import InputText, { InputTextConfig } from "../InputText/InputText";
import InputAnnotation, { inputAnnotationConfig } from "../InputAnnotation/InputAnnotation";
import style from "./InputGroup.module.css";

interface InputGroupConfig extends InputTextConfig, InputLabelConfig, inputAnnotationConfig  {}

const InputGroup: FC<InputGroupConfig> = ({
  ...props
}) => {
  return (
    <div
      className={`${style.groupContainer} ${
        props.labelPosition === "left" ? style.leftLabel : ""
      }`}
    >
      <InputLabel
        tooltip={props.tooltip}
        isRequired={props.isRequired}
        isMarked={props.isMarked}
        labelSize={props.labelSize}
        darkmode={props.darkmode}
      />
      <div className={style.inputWrapper}>
        <InputText
          isIconBefore={props.isIconAfter}
          isIconAfter={props.isIconAfter}
          isShortKey={props.isShortKey}
          labelPosition={props.labelPosition}
          inputSize={props.inputSize}
          placeholder={props.placeholder}
          state={props.state}
          darkmode={props.darkmode}
        />
        <InputAnnotation
          labelPosition={props.labelPosition}
          annotationText={props.annotationText}
          state={props.state}
          darkmode={props.darkmode}
        />
      </div>
    </div>
  );
};

export default InputGroup;
