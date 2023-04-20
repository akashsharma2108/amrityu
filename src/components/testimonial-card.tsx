import React from "react";
import { Box, Typography, Avatar , useMediaQuery} from "@mui/material";

interface TestimonialCardProps {
  name: string;
  image: string;
  testimonial: string;
  sx?: any;
}
interface FooterProps {}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  testimonial,
}) => {
  const isMobile = useMediaQuery("(max-width: 960px)");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height : "40vh",
        backgroundColor : "#FBEEE9",
        mb : 2,
      }}
    >
      {isMobile ? (<>
      <Box >
      <Avatar alt={name} src={image} sx={{ width: 60, height: 60, mb: 2, ml : "45%" }} />
        <Typography variant="h6" sx={{  fontSize : "15px", textAlign : "center"}}>{name}</Typography>
        <Typography variant="body1" sx={{ fontStyle: "italic" , fontSize : "12px"}}>
          {testimonial}
        </Typography>
      </Box></>):(<><Avatar alt={name} src={image} sx={{ width: 80, height: 80, mr: 2 }} />
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          {testimonial}
        </Typography>
      </Box></>)}
    </Box>
  );
};
