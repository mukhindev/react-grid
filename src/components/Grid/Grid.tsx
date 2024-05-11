import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styles from "./Grid.module.css";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  "data-component"?: string;
  /** Columns count (x) */
  columns?: number;
  /** Rows count (y) */
  rows?: number;
  /** Gap size */
  gap?: number | string;
}

/** Grid for React with a headless UI and simple parameters */
export default forwardRef(function Grid(
  props: GridProps,
  ref: ForwardedRef<HTMLDivElement>,
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

  return (
    <div
      {...divProps}
      data-component={dataComponent ? `Grid/${dataComponent}` : "Grid"}
      className={[styles.root, className].filter((el) => el).join(" ")}
      ref={ref}
      style={{
        "--grid-columns": columns,
        "--grid-rows": rows,
        "--gap": typeof gap === "number" ? `${gap}px` : gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
});
