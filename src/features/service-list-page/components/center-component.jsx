import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../../components/ServiceCard";

const CenterComponent = () => {
  return (
    <Box>
      <Typography sx={{fontSize:28,fontFamily:'Poppins',fontWeight:'500'}}>Service</Typography>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
    </Box>
  );
};

export default CenterComponent;
