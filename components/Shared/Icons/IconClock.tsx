import { FunctionComponent } from "react";

import { IconProps } from "./types";

const IconClock: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.66862 0.5H7.33529C7.70195 0.5 8.00195 0.8 8.00195 1.16667C8.00195 1.53333 7.70195 1.83333 7.33529 1.83333H4.66862C4.30195 1.83333 4.00195 1.53333 4.00195 1.16667C4.00195 0.8 4.30195 0.5 4.66862 0.5ZM6.66862 8.5C6.66862 8.86667 6.36862 9.16667 6.00195 9.16667C5.63529 9.16667 5.33529 8.86667 5.33529 8.5V5.83333C5.33529 5.46667 5.63529 5.16667 6.00195 5.16667C6.36862 5.16667 6.66862 5.46667 6.66862 5.83333V8.5ZM10.6887 4.76L11.1887 4.26C11.442 4.00667 11.4487 3.58667 11.1887 3.32667L11.182 3.32C10.922 3.06 10.5087 3.06667 10.2487 3.32L9.74869 3.82C8.71535 2.99333 7.41535 2.5 6.00202 2.5C2.80202 2.5 0.0820199 5.14 0.00201991 8.34C-0.0846468 11.7267 2.62869 14.5 6.00202 14.5C9.32202 14.5 12.002 11.8133 12.002 8.5C12.002 7.08667 11.5087 5.78667 10.6887 4.76ZM1.33529 8.5C1.33529 11.08 3.42195 13.1667 6.00195 13.1667C8.58195 13.1667 10.6686 11.08 10.6686 8.5C10.6686 5.92 8.58195 3.83333 6.00195 3.83333C3.42195 3.83333 1.33529 5.92 1.33529 8.5Z"
        fill="#0A62B0"
      />
    </svg>
  );
};

export default IconClock;
