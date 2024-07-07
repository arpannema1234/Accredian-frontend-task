import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import ReferralModal from "./ReferralModal";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Refer & Earn
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Refer a friend and earn rewards when they enroll in a course!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpen}
          >
            Refer Now
          </Button>
        </Box>
      </Container>
      <ReferralModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default HeroSection;
