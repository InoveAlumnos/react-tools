import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

const SkeletonItem = () => {
  return (
    <>
    <Stack>
      <Skeleton variant="rounded" width={250} height={40} />
    </Stack>
    </>
  );
};

const Item = () => {
  return (
    <div
      style={{
        border: "2px solid #ff0055",
        borderRadius: "5px",
        background: "#ff005550",
        color: "#2040fe",
      }}
    >
      Este es un texto de ejemplo
    </div>
  );
};

export default function GridSkeleton() {
    const [state, setState] = useState(false);  
    
    useEffect(
      ()=>{
        setTimeout(
          ()=>setState(!state), 
          3000
          );
      },[]
    )
    
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>{state ? <Item /> : <SkeletonItem />}</Grid>
        <Grid xs={2}>{state ? <Item /> : <SkeletonItem />}</Grid>
        <Grid xs={2}>{state ? <Item /> : <SkeletonItem />}</Grid>
        <Grid xs={8}>{state ? <Item /> : <SkeletonItem />}</Grid>
        <Grid xs={2}>{state ? <Item /> : <SkeletonItem />}</Grid>
        <Grid xs={10}>{state ? <Item /> : <SkeletonItem />}</Grid>
      </Grid>
    </Box>
  );
}
