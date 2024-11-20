import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const LeftComponent = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontSize: 36,
          fontWeight: 600,
          fontFamily: "Poppins",
        }}
      >
        AC Repair & Service
      </Typography>
      <Box sx={{ display: "flex", alignItems: "end", mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(7, 121, 76, 1.00)",
            width: 60,
            justifyContent: "center",
            p: 0.5,
            borderRadius: 1,
          }}
        >
          <StarsIcon fontSize="12" sx={{ color: "white" }} />
          <Typography
            sx={{ ml: 1, fontSize: 12, fontWeight: 600, color: "white" }}
          >
            4.81
          </Typography>
        </Box>
        <Typography
          sx={{ ml: 1, fontSize: 16, fontWeight: 400, fontFamily: "Poppins" }}
        >
          1.4 M reviews
        </Typography>
      </Box>

      <Box
        sx={{
          p: 2,
          backgroundColor: "rgb(245, 245, 245)",
          my: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon color="rgb(7, 121, 76)" fontSize="8" />

            <Typography
              sx={{
                fontSize: 12,
                color: "rgb(84, 84, 84)",
                fontFamily: "Poppins",
                fontWeight: "600",
                ml: 1,
              }}
            >
              UC COVER
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 14,
              mt: 1,
            }}
          >
            Verified quotes & 30 days warrenty
          </Typography>
        </Box>
        <Box>
          <NavigateNextIcon />
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          border: "1px solid rgba(227, 227, 227, 1.00)",
          borderRadius: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            color: "rgb(117, 117, 117)",
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
        >
          Select a service
        </Typography>
        <Grid2
          rowGap={2}
          container
          sx={{
            mt: 2,
          }}
        >
          <Grid2
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
            size={{
              xs: 4,
            }}
          >
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663504749-c8d799.jpeg"
              style={{ borderRadius: 5 }}
            />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "Poppins",
                mt: 1,
              }}
            >
              Install
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
            size={{
              xs: 4,
            }}
          >
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663504749-c8d799.jpeg"
              style={{ borderRadius: 5 }}
            />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "Poppins",
                mt: 1,
              }}
            >
              Repair & gas refill
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
            size={{
              xs: 4,
            }}
          >
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663504749-c8d799.jpeg"
              style={{ borderRadius: 5 }}
            />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "Poppins",
                mt: 1,
              }}
            >
              Service
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
            size={{
              xs: 4,
            }}
          >
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663504749-c8d799.jpeg"
              style={{ borderRadius: 5 }}
            />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "Poppins",
                mt: 1,
              }}
            >
              Install & Uninstall
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default LeftComponent;
