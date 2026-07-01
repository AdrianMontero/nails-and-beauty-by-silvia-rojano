import * as React from "react";

/**
 * Text field with tracked-caps label, soft rounded border, rose focus ring.
 */
export interface InputProps {
  label?: string;
  id?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  /** Error message; also switches border to error tone. */
  error?: string;
  /** Helper text shown below when no error. */
  hint?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Input(props: InputProps & React.InputHTMLAttributes<HTMLInputElement>): JSX.Element;
