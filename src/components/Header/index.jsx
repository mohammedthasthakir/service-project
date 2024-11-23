// import {
//   Box,
//   IconButton,
//   InputAdornment,
//   styled,
//   TextField,
// } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SearchIcon from "@mui/icons-material/Search";

// const Header = () => {
//   const StyledTextField = styled(TextField)(({ theme }) => ({
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: theme.palette.grey[400], // Change border color
//         borderRadius: 10,
//         // height:55
//       },
//       "&:hover fieldset": {
//         borderColor: theme.palette.primary.main, // Change border color on hover
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: theme.palette.primary.main, // Change border color when focused
//       },
//       // padding: '10px', // Adjust padding
//     },
//     "& .MuiInputBase-input": {
//       paddingLeft: "10px", // Add padding to the left for the icon
//     },
//   }));
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         px: 13,
//         py: 2,
//         borderBottom: "1px solid rgba(227, 227, 227, 1.00)",
//         borderTop: "none",
//         borderLeft: "none",
//         borderRight: "none",
//       }}
//     >
//       <Box
//         sx={{
//           alignItems: "center",
//           display: "flex",
//         }}
//       >
//         <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg" />
//         <Box sx={{}}>
//           <NavLink
//             style={{
//               textDecoration: "none",
//               marginLeft: 40,
//               fontSize: 14,
//               color: "rgba(84, 84, 84, 1.00)",
//             }}
//           >
//             Beauty
//           </NavLink>
//           <NavLink
//             style={{
//               textDecoration: "none",
//               marginLeft: 40,
//               fontSize: 14,
//               color: "rgba(84, 84, 84, 1.00)",
//             }}
//           >
//             Homes
//           </NavLink>
//           <NavLink
//             style={{
//               textDecoration: "none",
//               marginLeft: 40,
//               fontSize: 14,
//               color: "rgba(84, 84, 84, 1.00)",
//             }}
//           >
//             Native
//           </NavLink>
//         </Box>
//       </Box>
//       <Box>
//         <StyledTextField
//           variant="outlined"
//           placeholder="Search..."
//           slotProps={{
//             input: {
//               sx: {
//                 fontSize: 14,
//                 fontFamily: "Poppins",
//               },
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             },
//           }}
//           size="medium"
//           fullWidth
//         />
//       </Box>
//       <Box>
//         <IconButton onClick={() => {}}>
//           <ShoppingCartIcon />
//         </IconButton>
//         <IconButton onClick={() => {}} sx={{ ml: 2 }}>
//           <AccountCircleIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.grey[400], // Change border color
        borderRadius: 10,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main, // Change border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main, // Change border color when focused
      },
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px", // Add padding to the left for the icon
    },
  }));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Beauty", path: "/beauty" },
    { text: "Homes", path: "/homes" },
    { text: "Native", path: "/native" },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, lg: 13 }, // Responsive padding
          py: 2,
          borderBottom: "1px solid rgba(227, 227, 227, 1.00)",
          position: "fixed", // Make the header fixed
          top: 0, // Stick to the top
          left: 0, // Align to the left
          right: 0, // Align to the right
          backgroundColor: "white", // Ensure background color is set
          zIndex: 1200, // Ensure it stays above other content
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg"
            alt="Logo"
            style={{ marginRight: "10px" }}
          />
          <Box sx={{ display: "flex" }}>
            {menuItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.path}
                style={{
                  textDecoration: "none",
                  marginLeft: 40,
                  fontSize: 14,
                  color: "rgba(84, 84, 84, 1.00)",
                }}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
          {/* <ThemeToggleButton/> */}
        </Box>
        <Box sx={{ mx: 2 }}>
          <StyledTextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                fontSize: 14,
                fontFamily: "Poppins",
              },
            }}
            size="medium"
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => {}}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton onClick={() => {}} sx={{ ml: 2 }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer for small devices */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={NavLink}
                to={item.path}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
