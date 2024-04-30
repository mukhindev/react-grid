import { useContext } from "react";
import { GridContext } from "../components/Grid/GridContext";

export const useGrid = () => useContext(GridContext);
