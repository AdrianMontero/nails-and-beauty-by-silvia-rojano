import * as React from "react";

/**
 * Eyebrow + serif title + optional lead. The typographic intro unit
 * that opens most page sections.
 *
 * @startingPoint section="Core" subtitle="Section intro block" viewport="700x260"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** @default "center" */
  align?: "center" | "left";
  /** Show the line–dot–line divider. @default true */
  divider?: boolean;
  /** "light" for dark backgrounds. @default "dark" */
  tone?: "dark" | "light";
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
