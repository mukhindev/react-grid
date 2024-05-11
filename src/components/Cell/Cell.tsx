import {
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import styles from "./Cell.module.css";

export interface CellProps extends HTMLAttributes<HTMLDivElement> {
  "data-component"?: string;
  /** Column position (x). From zero */
  x?: number;
  /** Row position (y). From zero */
  y?: number;
  /** Expansion by columns (x). -1 to expand to free column space */
  columns?: number;
  /** Expansion by rows (y). -1 to expand to free row space */
  rows?: number;
}

/** Grid Cell */
export default forwardRef(function Cell(
  props: PropsWithChildren<CellProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    "data-component": dataComponent,
    columns = 1,
    rows = 1,
    x,
    y,
    children,
    className,
    style,
    ...divProps
  } = props;

  let gridColumn = undefined;

  if (columns > -1 && x) {
    gridColumn = `${x + 1}/span ${columns}`;
  }

  if (columns === -1) {
    gridColumn = `-1/1`;
  }

  let gridRow = undefined;

  if (rows > -1 && y) {
    gridRow = `${y + 1}/span ${rows}`;
  }

  if (rows === -1) {
    gridRow = `-1/1`;
  }

  return (
    <div
      {...divProps}
      data-component={dataComponent ? `Cell/${dataComponent}` : "Cell"}
      className={[styles.root, className].filter((el) => el).join(" ")}
      ref={ref}
      style={{
        "--grid-column": gridColumn,
        "--grid-row": gridRow,
        ...style,
      }}
    >
      {children}
    </div>
  );
});
