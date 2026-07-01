import * as React from "react";

/**
 * Styled dropdown matching Input — service, staff, and time-slot pickers.
 */
export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  id?: string;
  /** Strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  placeholder?: string;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>): JSX.Element;
