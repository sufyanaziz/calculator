import React from "react";
import "./style.scss";

interface Props {
  value: string | number;
  className: "button-operator" | "button-number";
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  value,
  name,
  onClick,
  disabled,
}) => {
  return (
    <div className="button-container">
      <button
        className={`${className} ${disabled ? "disabled" : ""}`}
        id={name}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
