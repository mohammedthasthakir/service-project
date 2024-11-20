import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const LeftArrow = () => {
    return <div>hdcfewfefwei</div>;
  };

  const bannerArray = [
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1728643364936-447b4b.jpeg",
      title: "Festive Lights Decoration",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1687428458328-9e147d.jpeg",
      title: "Native Water Purifier",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg",
      title: "Bathroom & kitchen cleaning",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040419628-022a2b.jpeg",
      title: "Full home painting",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1719991333232-d32f07.jpeg",
      title: "Native smart locks",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040407144-95eb6e.jpeg",
      title: "Spa Ayurveda",
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          color: "rgb(15, 15, 15)",
          fontWeight: 500,
          fontFamily: "Poppins",
        }}
        variant="h4"
      >
        New and noteworthy
      </Typography>
      <Carousel
        autoPlay={false}
        // swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={true}
        responsive={responsive}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={4000}
        // transitionDuration={500}
        //   removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
      >
        {bannerArray?.map((item, i) => (
          <div key={i} className="slider">
            <img
              src={item?.img}
              style={{
                // height: 230,
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: 300,
              }}
            >
              {item?.title}
            </Typography>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
