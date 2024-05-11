"use client";

import { createContext } from "react";

type GridContextValue = {
  columns?: number;
  rows?: number;
};

export const GridContext = createContext<GridContextValue>({
  columns: undefined,
  rows: undefined,
});
