import {
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import styles from "./Cell.module.css";
import { useGrid } from "../../hooks/useGrid";

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
  ref: ForwardedRef<HTMLDivElement>
) {
  const {
    "data-component": dataComponent,
    columns,
    rows,
    x,
    y,
    children,
    className,
    style,
    ...divProps
  } = props;

  const { columns: gridColumns, rows: gridRows } = useGrid();

  let gridColumn =
    columns !== undefined
      ? columns > -1
        ? `span ${columns <= (gridColumns ?? Infinity) ? columns : gridColumns}`
        : `span ${gridColumns}`
      : `span 1`;

  let gridRow =
    rows !== undefined
      ? rows > -1
        ? `span ${rows <= (gridRows ?? Infinity) ? rows : gridRows}`
        : `span ${gridRows}`
      : `span 1`;

  if (x !== undefined) {
    gridColumn = `${x + 1} / ${gridColumn}`;
  }

  if (y !== undefined) {
    gridRow = `${y + 1} / ${gridRow}`;
  }

  return (
    <div
      {...divProps}
      data-component={dataComponent ? `Cell/${dataComponent}` : "Cell"}
      className={[styles.Cell, className].filter((el) => el).join(" ")}
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
