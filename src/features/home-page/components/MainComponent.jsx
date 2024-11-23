import {
  Avatar,
  Box,
  Grid2,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import "./style.css";

const MainComponent = () => {
  const array = [
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg",
      title: "Women's salon & spa",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg",
      title: "Men's salon & Massage",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
      title: "AC & Appliance Repair",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg",
      title: "Cleaning & Pest Control",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png",
      title: "Electrician, Plumber & Carpenter",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg",
      title: "Native Water Purifier",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1727098260855-690300.jpeg",
      title: "Native Smart Locks",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1727098260855-690300.jpeg",
      title: "Painting & Water proofing",
    },
  ];
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid2 container paddingY={6} columnSpacing={8}>
      <Grid2 size={{ xs: 12, md: 5.5 }}>
        <Typography
          sx={{
            color: "rgb(15, 15, 15)",
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
          variant="h4"
        >
          Home services at your {isMd ? <br /> : " "} doorstep
        </Typography>
        <Box
          sx={{
            border: "1px solid rgba(227, 227, 227, 1.00)",
            borderRadius: 5,
          }}
          padding={{md:3,xs:2}}
          marginY={4}
        >
          <Typography
            sx={{
              color: "rgb(84, 84, 84)",
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
            variant="body3"
          >
            What are you looking for?
          </Typography>
          <Grid2 container spacing={1} mt={3}>
            {array?.map((item, i) => (
              <Grid2 key={i} size={{ xs: 4 }}>
                <Box
                  sx={{
                    backgroundColor: "#FCE7F7",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    py: 2,
                    borderRadius:3
                  }}
                >
                  <img src={item.img} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { md: 12, xs: 10 },
                    textAlign: "center",
                    mt: 1,
                    px: 2,
                    fontFamily: "Poppins",
                  }}
                >
                  {item.title}
                </Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6.5 }}>
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
          width={"100%"}
          style={{ objectFit: "contain" }}
        />
      </Grid2>
    </Grid2>
  );
};

export default MainComponent;
