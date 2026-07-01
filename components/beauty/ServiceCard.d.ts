import * as React from "react";

/**
 * A single bookable service row (Booksy-style): name, description,
 * duration, price, and a booking action. The signature domain component.
 *
 * @startingPoint section="Beauty" subtitle="Bookable service card" viewport="700x260"
 */
export interface ServiceCardProps {
  name: string;
  description?: string;
  /** e.g. "1h 30min" */
  duration?: string;
  /** Formatted price, e.g. "40,00 €" */
  price: string;
  /** Show the gold "Popular" flag. @default false */
  popular?: boolean;
  /** Optional photo header. */
  image?: string;
  onBook?: (e: React.MouseEvent) => void;
  /** Booking URL (Booksy). Renders the button as a link. */
  bookHref?: string;
  style?: React.CSSProperties;
}
export function ServiceCard(props: ServiceCardProps): JSX.Element;
