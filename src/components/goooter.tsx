import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Instagram, Twitter, Facebook, YouTube } from "@mui/icons-material";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          minHeight: "40vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          color: "#333",
          "& a": {
            color: "#333",
            textDecoration: "none",
            marginBottom: "1rem",
          },
        }}
      >
        {/* Logo */}
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <img src="/path/to/logo.png" alt="Company logo" />
        </Box>

        {/* Links and Address */}
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: "1rem" }}>
            Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/services">Services</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </Box>
          <Typography variant="h6" sx={{ mt: "2rem", mb: "1rem" }}>
            Address
          </Typography>
          <Typography variant="body1">
            1234 Main Street <br />
            City, State 12345 <br />
            Phone: 123-456-7890
          </Typography>
        </Box>

        {/* Social Media */}
        <Box sx={{ width: "100%", textAlign: "center", mt: "2rem" }}>
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton aria-label="YouTube">
            <YouTube />
          </IconButton>
        </Box>
      </Box>

      {/* Copyright should be at the bottom */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          borderTop: "1px solid #333",
          padding: "1rem",
        }}
      >
        <Typography variant="body1">
          © 2023 Crawldigitally. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
