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
  type?: 'text' | 'number' | 'email' | "password";
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
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
  type = 'text',
  onBlur,
  onChange,
  onSubmit
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    if (onSubmit) {
      onSubmit(event);
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        style.inputContainer,
        {
          [style.leftPosititonContainer]: labelPosition === "left",
          [style.border]: border,
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
          ${labelPosition === 'left' ? style.leftPosititon : ''}
          ${style.input} 
          ${style[alignment]}
          ${placeholder}
          ${state === "disabled" ? style.disabled : ''}`}
        type={type}
        placeholder={placeholder}
        disabled={state === "disabled"}
        onBlur={onBlur}
        onChange={onChange}
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
    </form>
  );
};


export default InputText;
