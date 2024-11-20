import { Box, Typography } from "@mui/material";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";

const RightComponent = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 2,
          border: "1px solid rgba(227, 227, 227, 1.00)",
          borderRadius: 2,
          // display: "flex",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245, 1.00)",
              p: 1,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: 2,
            }}
          >
            <ReportRoundedIcon color="green" />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: 12,
                color: "rgb(15, 15, 15)",
              }}
            >
              Buy more save more
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Poppins",
                fontSize: 12,
                color: "rgb(117, 117, 117);",
              }}
            >
              $150 off 2nd item onwards
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center",mt:2 }}>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245, 1.00)",
              p: 1,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: 2,
            }}
          >
            <ReportRoundedIcon color="green" />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: 12,
                color: "rgb(15, 15, 15)",
              }}
            >
              Buy more save more
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Poppins",
                fontSize: 12,
                color: "rgb(117, 117, 117);",
              }}
            >
              $150 off 2nd item onwards
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center",mt:2 }}>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245, 1.00)",
              p: 1,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: 2,
            }}
          >
            <ReportRoundedIcon color="green" />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: 12,
                color: "rgb(15, 15, 15)",
              }}
            >
              Buy more save more
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Poppins",
                fontSize: 12,
                color: "rgb(117, 117, 117);",
              }}
            >
              $150 off 2nd item onwards
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default RightComponent;
