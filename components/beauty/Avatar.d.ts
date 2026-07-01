import * as React from "react";

/**
 * Circular client/staff portrait; initials fallback on soft rose.
 */
export interface AvatarProps {
  src?: string;
  /** Used for alt text + initials fallback. */
  name?: string;
  /** Diameter in px. @default 48 */
  size?: number;
  /** Soft rose ring. @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;
