import * as React from "react";

/**
 * The signature line–dot–line separator from the SR wordmark.
 */
export interface DividerProps {
  /** Total width in px or any CSS length. @default 120 */
  width?: number | string;
  /** @default "rose" */
  tone?: "rose" | "gold";
  style?: React.CSSProperties;
}
export function Divider(props: DividerProps): JSX.Element;
