import * as React from "react";

/**
 * Compact label for categories, prices, and status pills.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "rose" */
  tone?: "rose" | "gold" | "neutral" | "solid" | "outline";
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
