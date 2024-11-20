import { Box, Grid2 } from "@mui/material";
import LeftComponent from "../../features/service-list-page/components/left-component";
import CenterComponent from "../../features/service-list-page/components/center-component";
import RightComponent from "../../features/service-list-page/components/right-component";
const ServiceListPage = () => {
  return (
    <Box
      sx={{
        px: {
          md: 13,
          xs: 2,
        },
      }}
    >
      <Grid2 container sx={{ marginTop: 15 }} rowSpacing={5} columnSpacing={5}>
        <Grid2 size={{ xs: 12, md: 3.5 }}>
          <LeftComponent />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <CenterComponent />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3.5 }}>
          <RightComponent />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ServiceListPage;
