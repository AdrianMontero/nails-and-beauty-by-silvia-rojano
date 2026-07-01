import * as React from "react";

/**
 * Primary interactive control. Rose primary for booking CTAs; gold for
 * premium moments; outline / ghost for secondary; dark for footer contexts.
 *
 * @startingPoint section="Core" subtitle="Booking & action buttons" viewport="700x200"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "gold" | "outline" | "ghost" | "dark";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Render as anchor when set. */
  href?: string;
  as?: "button" | "a";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
