import { Box, Typography } from "@mui/material";
import React from "react";

const QuantityButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(245, 242, 253)",
        border: "1px solid rgb(110, 66, 229)",
        borderRadius: 2,
        width: 60,
        justifyContent: "space-between",
        p: 0.5,
        px: 1,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "rgb(110, 66, 229)",
            fontWeight: 600,
          }}
        >
          -
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          color: "rgb(110, 66, 229)",
          fontWeight: 600,
        }}
      >
        5
      </Typography>
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "rgb(110, 66, 229)",
            fontWeight: 600,
          }}
        >
          +
        </Typography>
      </Box>
    </Box>
  );
};

export default QuantityButton;
