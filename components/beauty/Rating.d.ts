import * as React from "react";

/**
 * Gold star row for reviews. Supports half values and a review count.
 */
export interface RatingProps {
  /** 0–max, halves allowed. @default 5 */
  value?: number;
  /** @default 5 */
  max?: number;
  /** Star size in px. @default 18 */
  size?: number;
  /** Show "{n} reseñas" after the stars. */
  count?: number;
  /** Show the numeric value (e.g. 5.0). @default false */
  showValue?: boolean;
  style?: React.CSSProperties;
}
export function Rating(props: RatingProps): JSX.Element;
