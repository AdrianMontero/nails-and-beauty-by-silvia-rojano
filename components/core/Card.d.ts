import * as React from "react";

/**
 * Soft rounded surface — base container for services, reviews, features.
 *
 * @startingPoint section="Core" subtitle="Rounded content surface" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** @default "white" */
  tone?: "white" | "blush" | "deep" | "dark";
  /** Enable hover lift. @default false */
  hover?: boolean;
  /** Inner padding. @default "lg" */
  pad?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
