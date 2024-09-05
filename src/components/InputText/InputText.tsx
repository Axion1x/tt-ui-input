import React, { useRef } from "react";
import style from "./InputText.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-lg.svg";
import { ReactComponent as ShortKey } from "../../assets/icons/shortkey.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/Help icon.svg"; // Assuming this is the path to your SVG
import { classNames } from "../../scripts";

export interface InputTextConfig {
  isIconBefore: boolean;
  isIconAfter: boolean;
  isShortKey: boolean;
  labelPosition?: "top" | "left";
  inputSize?: "sm" | "md" | "lg" | "xl";
  placeholder?: string;
  border?: boolean;
  alignment?: "right" | "left";
  darkmode?: boolean;
  state?: "default" | "hover" | "focus" | "error" | "disabled" | "error-focus";
}

const InputText: React.FC<InputTextConfig> = ({
  isIconBefore = false,
  isIconAfter = false,
  isShortKey = false,
  labelPosition = "top",
  inputSize = "md",
  placeholder = "Input...",
  border = true,
  alignment = "left",
  darkmode = false,
  state = "default",
}) => {
  if (labelPosition === "left" && (isIconBefore || isIconAfter || isShortKey)) {
    throw new Error("Not enough space! Left position - 64px width on input");
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      // className={`${style.inputContainer}
      //   ${labelPosition === "left" ? style.leftPosititon : ""}
      //   ${style[inputSize]}
      //   ${border? '' : style.nonBorder}
      //   ${darkmode ? style.darkmode : ""}
      //   ${state === 'error' ? style.error : ""}
      //   ${style[state]}
      // `}
      className={classNames(
        style.inputContainer,
        {
          [style.leftPosititon]: labelPosition === "left",
          [style.nonBorder]: !border,
          [style.darkmode]: darkmode,
          [style.error]: state === "error",
        },
        [style[state], style[inputSize]]
      )}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {isIconBefore ? (
        <SearchIcon
          className={`${style.search} ${
            state === "error" || state === "error-focus" ? style.errorIcon : ""
          }`}
        />
      ) : (
        ""
      )}

      <input
        ref={inputRef}
        className={`
          ${style.input} 
          ${style[alignment]}
          ${placeholder}`}
        type="text"
        placeholder={placeholder}
        disabled={state === "disabled"}
      />
      {isShortKey ? (
        <HelpIcon
          className={`${style.helpIcon} ${
            state === "error" || state === "error-focus" ? style.errorIcon : ""
          }`}
        />
      ) : (
        ""
      )}
      {isIconAfter ? <ShortKey className={`${style.shortkey}`} /> : ""}
    </div>
  );
};

export default InputText;
