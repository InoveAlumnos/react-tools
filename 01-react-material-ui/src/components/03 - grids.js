import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const Item = () => {
  return (
    <div
      style={{
        border: "2px solid #ff0055",
        borderRadius: "5px",
        padding: "5px",
        background: "#ff005550",
        color: "#2040fe",
      }}
    >
      Este es un texto de ejemplo
    </div>
  );
};

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item />
        </Grid>
        <Grid xs={4}>
          <Item />
        </Grid>
        <Grid xs={4}>
          <Item />
        </Grid>
        <Grid xs={8}>
          <Item />
        </Grid>
      </Grid>
    </Box>
  );
}
