// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { COLORS } from "../../constants";
// ** Icon Imports
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment, TextField, useMediaQuery } from "@mui/material";

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
  top: 0,
  right: 0,
  color: "grey.500",
  position: "absolute",
  boxShadow: theme.shadows[2],
  transform: "translate(10px, -10px)",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
  "&:hover": {
    transform: "translate(7px, -5px)",
  },
}));

const DialogCustomized = () => {
  // ** State
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      sx={{ "& .MuiDialog-paper": { overflow: "visible" } }}
      // fullWidth
    >
      <DialogTitle id="customized-dialog-title" sx={{ pt: 4 }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontFamily: "Poppins" }}
        >
          Log In or Sign Up
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            mt: 2,
            fontWeight: 300,
            mx: {
              md: 10,
            },
          }}
        >
          Enter your phone number to log in or create a new account
        </Typography>
        <CustomCloseButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </CustomCloseButton>
      </DialogTitle>
      <DialogContent
        // dividers
        sx={{
          py: (theme) => `${theme.spacing(2)} !important`,
          mx: { md: 10 },
          pb: 5,
        }}
      >
        <TextField
          label="Phone Number"
          id="outlined-start-adornment"
          // sx={{ m: 1, width: 250 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            },
          }}
          InputLabelProps={{
        sx: { fontFamily:'Poppins' },
      }}
          placeholder="6369383954"
        />
        <Button
          variant="contained"
          color="#fff"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: COLORS.primary,
            color: "#fff",
            fontFamily: "Poppins",
          }}
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCustomized;
