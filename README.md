# @mukhindev/react-grid

Grid for React with a headless UI and simple parameters

> [!NOTE]  
> Dependencies: Need support for CSS modules in your configuration

Demo: https://github.com/mukhindev/react-grid-demo

## Install

```
npm install @mukhindev/react-grid
```

## Grid and Cell

```
┏━━━━━━━┳━━━┓
┃   A   ┃ B ┃
┣━━━━━━━┻━━━┫
┃     C     ┃
┗━━━━━━━━━━━┛
```

```JavaScript
import { Grid, Cell } from "@mukhindev/react-grid";

function MyComponent() {
  return (
    <Grid columns={3} rows={2} gap="1rem">
      <Cell columns={2}>A</Cell>
      <Cell>B</Cell>
      <Cell columns={3}>C</Cell>
    </Grid>
  );
}
```

## Styles with className 

```JavaScript
function MyComponent() {
  return (
    <Grid className="grid" columns={3}>
      <Cell>A</Cell>
      <Cell>B</Cell>
    </Grid>
  );
}
```

## Styles with Material UI (MUI)

https://mui.com/material-ui

```TypeScript
import Grid from "../ui/Grid";
import Cell from "../ui/Cell";

function MyComponent() {
  return (
    <Grid columns={3}>
      <Cell sx={{ backgroundColor: "tomato" }}>A</MuiCell>
      <Cell columns={2} sx={{ p: 1.5 }}>B</MuiCell>
    </Grid>
  );
}
```

```TypeScript
// ui/Grid.tsx
import { Grid, GridProps } from "@mukhindev/react-grid";
import { Box, BoxProps } from "@mui/material";

export default function MuiGrid(props: GridProps & BoxProps) {
  return <Box component={Grid} {...props} />;
}
```

```TypeScript
// ui/Cell.tsx
import { Cell, CellProps } from "@mukhindev/react-grid";
import { Box, BoxProps } from "@mui/material";

export default function MuiCell(props: CellProps & BoxProps) {
  return <Box component={Cell} {...props} />;
}
```