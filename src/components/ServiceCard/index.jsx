import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import QuantityButton from "../QuantityButton";
const ServiceCard = () => {
  return (
    <Grid2 container sx={{
      py:5,
      borderBottom:'1px solid rgba(227, 227, 227, 1.00)'
    }}>
      <Grid2
        size={{
          xs: 8,
        }}
        sx={{ pr: 4 }}
      >
        <Typography
          sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 500 }}
        >
          Power saver AC service
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
          }}
        >
          <StarsIcon fontSize="12" sx={{ color: "rgba(7, 121, 76, 1.00)" }} />
          <Typography
            sx={{
              ml: 1,
              fontSize: 12,
              fontWeight: 400,
              color: "rgb(84, 84, 84)",
              fontFamily: "Poppins",
            }}
          >
            4.81 (71.8k views)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 1, alignItems: "center" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 12,
              color: "rgb(15, 15, 15)",
              fontWeight: 700,
            }}
          >
            $1999
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 12,
              color: "rgb(84, 84, 84)",
              fontWeight: 400,
              textDecorationLine: "line-through",
              ml: 1,
            }}
          >
            $1999
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 12,
              color: "rgb(15, 15, 15)",
              fontWeight: 800,
              mx: 1,
            }}
          >
            .
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 12,
              color: "rgb(84, 84, 84)",
              fontWeight: 400,
            }}
          >
            60 mins
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              py: 2,
              fontFamily: "Poppins",
              fontSize: 12,
              color: "rgb(84, 84, 84)",
              fontWeight: 400,
            }}
          >
            This is sample test for sample This is sample test for sample This
            is sample test for sample
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 14,
              color: "rgb(110, 66, 229)",
              fontWeight: 600,
            }}
          >
            View details
          </Typography>
        </Box>
      </Grid2>
      <Grid2
        size={{
          xs: 4,
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            height: 135,
            width: 135,
            borderRadius: 10,
            objectFit: "cover",
          }}
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1709306203358-a1c326.jpeg"
        />
        <Box sx={{mt:-2}}>

        <QuantityButton />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ServiceCard;
