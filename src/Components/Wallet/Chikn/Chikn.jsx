import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography,IconButton   } from "@mui/material";

import CachedIcon from "@mui/icons-material/Cached";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#191A32" : "#191A32",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <>
      <Box >
        <Grid container spacing={1} sx={{background:"none",paddingTop:"10px" }}>
          <Grid xs={2}></Grid>
          <Grid item xs={6} container justifyContent="start">
           
              <Typography variant="h4" color="error" >
                Wallet{" "}
                <Fab size="small" variant="outlined" color="primary"  aria-label="edit">
        <EditIcon />
      </Fab>
                
              </Typography>
          
          </Grid>
          <Grid item xs={4}>
           
              <IconButton sx={{ color: "white", border:"1px solid" }}>
                <CachedIcon />
              </IconButton>
           
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
