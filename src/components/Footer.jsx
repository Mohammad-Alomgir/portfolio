// src/Footer.js
import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
         Well
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "black", background: "gray", py: 2, px: 3 }}
        >
          {"© "}
          <Link color="inherit" href="https://your-website.com/">
            Copyright Alomgir
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
