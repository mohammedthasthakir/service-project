import { Box, Container } from "@mui/material";
import MainComponent from "../../features/home-page/components/MainComponent";
import BannerCarousel from "../../features/home-page/components/BannerCarousel";
import Slider from "../../components/Slider";
import DialogCustomized from "../../components/Dialog";
const HomePage = () => {
  return (
    <Box
      sx={{
        px: {
          md: 13,
          xs: 2,
        },
      }}
    >
      <MainComponent />
      <BannerCarousel />
      <Slider />
      <DialogCustomized/>
    </Box>
  );
};

export default HomePage;
