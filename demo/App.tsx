import Grid, { Cell } from "../src/main";
import styles from "./App.module.css";

export default function App() {
  return (
    <main>
      <pre>{`<Grid columns={6} rows={3} gap="0.5rem" />`}</pre>
      <hr />
      <Grid columns={6} rows={3} gap="0.5rem">
        <Cell className={styles.Cell}>
          <pre>{`<Cell />`}</pre>
        </Cell>
        <Cell className={styles.Cell}>
          <pre>{`<Cell />`}</pre>
        </Cell>
        <Cell className={styles.Cell}>
          <pre>{`<Grid />`}</pre>
        </Cell>
        <Cell className={styles.Cell} columns={2} rows={2}>
          <pre>{`<Grid columns={2} rows={2} />`}</pre>
        </Cell>
        <Cell className={styles.Cell} x={5} y={1}>
          <pre>{`<Grid x={5} y={1} />`}</pre>
        </Cell>
        <Cell className={styles.Cell} columns={-1}>
          <pre>{`<Grid columns={-1} />`}</pre>
        </Cell>
      </Grid>
    </main>
  );
}
