
import React from "react";
import { Box, Typography, Avatar, Container } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp"
import hero3 from "../assets/hero3.webp"
import hero4 from "../assets/hero4.webp"
import hero5 from "../assets/hero5.webp"
import phero1 from "../assets/phero1.webp"
import phero2 from "../assets/phero2.webp"
import phero3 from "../assets/phero3.webp"
import phero4 from "../assets/phero4.webp"
import phero5 from "../assets/phero5.webp"
import herotopimg from  "../assets/herotopimg.webp";
import heroUp from  "../assets/heroUP.webp";




interface HooterProps {}



export const HeroSection: React.FC<HooterProps> = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");
  const isTablet = useMediaQuery("(min-width: 760px)");
    return (
<Box sx={{ overflow : "hidden", position : "relative"  }}>
               
        {//make the image responsive
             isMobile ? (
                <Container sx={{ zIndex: 1, position: "absolute", top: "50%", left: "55%", transform: "translate(-50%, -55%)" }}>
                <img
                src={isTablet?(heroUp): (herotopimg)}
                alt="hero"
                style={{// make the image responsiv
                    width: "90%",
                    height: "100%",
                    zIndex: 1,

                }}
                />
                </Container>
            ) : (
                <Container sx={{ zIndex: 1, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <img
                src={heroUp }
                alt="hero"
                style={{
                    width: "100%",
                    height: "100%",
                
                    zIndex: 1,
                }}
                />
                </Container>
            )}
    <Slider

        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        >
        <Box
        sx={{
            backgroundImage:isMobile?`url(${phero1})` :`url(${hero1})`,   
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile?"40vh" :"70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
        }}
        >
        </Box>
        <Box
        sx={{
            backgroundImage:isMobile?`url(${phero2})` : `url(${hero2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile?"40vh" :"70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
        }}
        >
        </Box>
        <Box
        sx={{
            backgroundImage:isMobile?`url(${phero3})` : `url(${hero3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile?"40vh" :"70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
        }}
        >
        </Box>
        <Box
        sx={{
            backgroundImage:isMobile?`url(${phero4})` : `url(${hero4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile?"40vh" :"70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
        }}
        >
        </Box>
        <Box
        sx={{
            backgroundImage:isMobile?`url(${phero5})` : `url(${hero5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile?"40vh" :"70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
        }}
        >
        </Box>
    </Slider>
    </Box>
    );


}
