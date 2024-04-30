import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styles from "./Grid.module.css";
import { GridContext } from "./GridContext";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  "data-component"?: string;
  /** Columns count (x) */
  columns?: number;
  /** Rows count (y) */
  rows?: number;
  /** Gap size */
  gap?: number | string;
}

/** Grid with simple control */
export default forwardRef(function Grid(
  props: GridProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {
    "data-component": dataComponent,
    columns,
    rows,
    children,
    gap,
    className,
    style,
    ...divProps
  } = props;

  const templateColumns =
    columns !== undefined ? `repeat(${columns}, 1fr)` : undefined;

  const templateRows = rows !== undefined ? `repeat(${rows}, 1fr)` : undefined;

  return (
    <div
      {...divProps}
      data-component={dataComponent ? `Grid/${dataComponent}` : "Grid"}
      className={[styles.Grid, className].join(" ")}
      ref={ref}
      style={{
        "--template-columns": templateColumns,
        "--template-rows": templateRows,
        "--gap": typeof gap === "number" ? `${gap}px` : gap,
        ...style,
      }}
    >
      <GridContext.Provider
        value={{
          columns,
          rows,
        }}
      >
        {children}
      </GridContext.Provider>
    </div>
  );
});
