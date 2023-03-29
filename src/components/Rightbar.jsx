import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box sx={{ display:{ xs:"none",md:"flex"}, flexDirection: "column" }}>
      <Typography sx={{ mb: 2 }}>Latest Photos</Typography>
      <ImageList sx={{ width: 250 }} cols={2}>
        <ImageListItem>
          <img src="https://pixel4r.com/assets/portfolios/image09.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://pixel4r.com/assets/portfolios/image09.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://pixel4r.com/assets/portfolios/image09.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://pixel4r.com/assets/portfolios/image09.jpg" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

export default Rightbar;