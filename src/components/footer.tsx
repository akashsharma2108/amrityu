import React from "react";
import {
  Box,
  Typography,
  Link,  
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Instagram, Twitter, Facebook, YouTube } from "@mui/icons-material";
import icon from "../assets/icon.webp"
import instagram from "../assets/instagram.webp"
import facebook  from "../assets/facebook.webp"
import youtube  from "../assets/youtube.webp"
import connecUS from "../assets/connecUS.webp";
import mail from "../assets/mail.webp"
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${connecUS})`, 
        backgroundSize: 'cover',
          minHeight: "40vh",
          display: "flex",
          flexDirection:   isMobile ? "column" : "row", 
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          padding: "2rem",
          color: "white",
          "& a": {
            color: "white",
            textDecoration: "none",
            marginRight: isMobile ? "0" : "2rem",
            marginBottom: isMobile ? "1rem" : "0",
          },
        }}
      >
        {/* Logo */}
        <Box sx={{ width:isMobile? "100%" : "25%" , display : "flex" , justifyContent : isMobile? "center": "left"}}>
          {isMobile ? (<img src={icon} alt="Company logo" width="250px"  />):(<img src={icon} alt="Company logo"  width="200px" />)}
        </Box>

        {/* Links */}
        <Box sx={{ width: "100%", textAlign: isMobile ? "left" : "center" }}>
          <Typography variant="h6" sx={{ mb: "1rem", color : "white",  fontFamily: "'Lora', serif", }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexDirection: isMobile ? "column": "row", }}>
            {isMobile ? (<><Link href="/" sx={{ fontFamily: "'Lora', serif",}}>• Home</Link>
            <Link href="#about" sx={{ fontFamily: "'Lora', serif",}}>• About</Link>
            <Link href="#services" sx={{ color : "white", fontFamily: "'Lora', serif", }}>• Services</Link>
          </>):(<><Link href="/" sx={{ fontFamily: "'Lora', serif",}}>Home</Link><Link href="#about" sx={{ fontFamily: "'Lora', serif",}}>About</Link>
            <Link href="#services" sx={{ color : "white",fontFamily: "'Lora', serif", }}>Services</Link>
            <Link href="#contact" sx={{ fontFamily: "'Lora', serif",}} >Connect</Link>
        </>)}

          </Box>
        </Box>

        {/* Address and social media */}
        <Box
          sx={{
            width: isMobile ? "100%" : "25%",
            textAlign: isMobile ? "left" : "right",
          }}
        >
          <Typography variant="h6" sx={{  color : "white",  fontFamily: "'Lora', serif", }}>
          Contact
          </Typography>
          <Typography variant="body1" sx={{ color : "white" ,  fontFamily: "'Lora', serif",}}>
          Jaipur, India <br/>
          +91 7976393993
          </Typography>
        {/* <Typography variant="body1" sx={{ mt: "1rem", color : "white" }}>
          Phone: 123-456-7890 contact +91 7976393993 
        </Typography> */}
          <Box
            sx={{
              display: isMobile ? "flex" : "flex-end",
              justifyContent: isMobile ? "left" : "right",
              mt: "1rem",
              ml: isMobile ? "-1rem": "0",
            }}
          >
            <IconButton aria-label="Instagram" sx={{ color: '#C13584' }}>
              <img src={instagram} alt="insta" width={40}></img>
            </IconButton>
            {/* <IconButton aria-label="Twitter" sx={{ color: 'darkblue' }}>
              <Twitter />
            </IconButton> */}
            <IconButton aria-label="Facebook" sx={{ color: 'blue' }}>
            <img src={facebook} alt="insta" width={40}></img>
            </IconButton>
            <IconButton aria-label="YouTube" sx={{ color: 'red' }}>
            <img src={youtube} alt="insta" width={40}></img>
            </IconButton>
            <IconButton aria-label="Gmail" sx={{ color: 'red' }}>
            <img src={mail} alt="mail" width={40}></img>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Copyright should be at the bottom */}
      <Box
        sx={{
          width: "100",
          textAlign: "center",
          borderTop: "1px solid #333",
          padding: "1rem",
        }}
      >
        <Typography variant="body1">
          © 2023 Amrityu . All rights reserved.
            </Typography>
        </Box>
    </Box>
        

  );
};

export default Footer;
