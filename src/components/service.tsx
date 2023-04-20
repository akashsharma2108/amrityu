import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { data } from "../data/servicesData.json";
import { TestimonialCard } from "../components/testimonial-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fg from "../assets/fg.png";
import amrityu from "../assets/amrityu.svg";
import setBack from "../assets/setBack.webp";
import serBACkM from "../assets/serBACkM.webp";

const testimonials = [
  {
    id: 1,
    name: "Priyanka tickoo, Noida",
    image: "https://www.linkpicture.com/q/avatar.png",
    testimonial:
      "Nikita is a very friendly and non-judgmental person. She listens patiently and answers all questions with sincerity. She takes time to explain each and every card drawn during the reading. I was unsure of what to ask and was open to suggestions, but I left the session feeling like I had direction and more confidence in myself. Nikita gave me the confidence to trust my intuition and feelings, and to be true to myself. I highly recommend her. God bless!",
  },
  {
    id: 2,
    name: "Geetika udhwani, Delhi",
    image: "https://www.linkpicture.com/q/avatar.png",
    heading: "Highly Recommend",
    testimonial:
      "Thank you so much, Nikita, for your help. Despite the deep and touching session, I had so much fun with you and enjoyed every moment. You are an intuitive healer and an amazing medium who just feels the needs and resistances of her clients. I just want to express my deepest gratitude to you and tell the world that this is the best healing I have ever experienced! Whoever wants to make a huge change and feels brave enough to do it, should visit Nikita. I guarantee you won't regret it!",
  },
  {
    id: 3,
    name: "Tarun Shrivastava, Bangalore",
    image: "https://i.ibb.co/HXfYxH9/male.webp",
    heading: "Great Service",
    testimonial:
      "I have approached Nikita Ji since June 2022 and have received consultancy services from her nine times. All of the predictions given by her have been correct, especially the one about my new job. She had clearly told me that I would receive a job offer, but I would have to compromise on the position. And, as predicted, I received a new job with a good salary hike, but I had to compromise on my position. I also received healing services from her in October, which were also good.",
  },
  {
    id: 4,
    name: "Sumit, Dubai",
    image: "https://i.ibb.co/HXfYxH9/male.webp",
    heading: "Great Service",
    testimonial:
      "I was feeling sad and low about what was happening in my life, which led to me feeling depressed. Finally, I managed to have a word with Ms. Nikita and that made me feel better. The way she explained everything and how things will take place in the future made me feel better.",
  },
  {
    id: 5,
    name: "Roshni Sharma, Jaipur",
    image: "https://www.linkpicture.com/q/avatar.png",
    heading: "Great Service",
    testimonial:
      "I would like to share my experience with her tarot reading. The storytelling method that she used, by providing various examples related to the questions I asked, was amazing. She has a sense of detecting what the other person is going through just by knowing it through their way of asking questions, their voice, and words used. I was happy with what she told me. The cards were so accurate and exactly based on my feelings. She gave me direction and a ride through my situation/feelings, along with various references and examples, and guided me towards a mature solution. I found myself satisfied with the reading as I found answers to my questions.",
  },
];

interface FooterProps {}

const useStyles = makeStyles({
  card: {
    borderRadius: "10px 20px 20px 10px",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  cardImage: {
    width: "100%",
    height: "100px",
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  expandedCard: {
    borderRadius: "20px",
    marginBottom: "1rem",
  },
});

export const Services: React.FC<FooterProps> = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");
  const classes = useStyles();
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };

  return (
    <Box
      sx={{ p: 4, backgroundImage: isMobile ? `url(${serBACkM})` :`url(${setBack})`, backgroundSize: "cover" }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={amrityu}
          alt="logo"
          style={{
            height: 300,
            marginTop: "-6rem",
            marginBottom: "-6rem",
            padding: 0,
          }}
        />
        <Typography
          variant="h4"
          sx={{ marginBottom: "-0.7rem", color: "#381630",  fontFamily: "'Lora', serif", }}
        >
          Services
        </Typography>
        <img src={fg} alt="logo" style={{ height: 50, width: 300 }} />
        <Box sx={{ width: "60vw " }}>
          <Grid container spacing={3}>
            {data.map((service) => (
              <Grid item xs={12} md={4} key={service.badgeId}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardImage}
                    image={service.img}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontFamily: "'Lora', serif",}}>{service.name}</Typography>
                    {expandedCardId === service.badgeId ? (
                      <Box className={classes.expandedCard}>
                        <Typography
                          variant="body1"
                          style={{ textAlign: "justify" }}
                        >
                          {service.description.includes("\n") ? (
                            service.description
                              .split("\n")
                              .map((paragraph, index) => (
                                <Typography
                                  variant= {isMobile? "body2" : "body1"}
                                  style={{ textAlign: "justify" }}
                                  key={index}
                                > 
                                {//check if paragraph contains "Level" with some number and ":" make them bold example "level 1 :"
                                  paragraph.includes("Level") &&
                                  paragraph.includes(":") ? (
                                    <Typography
                                      variant={isMobile? "body2" : "body1"}
                                      style={{
                                        textAlign: isMobile? "left": "justify",
                                        fontSize: isMobile? "0.8rem" : "1rem",
                                        fontWeight: "bold",
                                      }}
                                    >
                                       {paragraph.split(":")[0]}:
                                       <Typography  
                                        style={{
                                        textAlign: "justify", fontSize: isMobile? "0.8rem" : "1rem"}}
                                        >
                                        {paragraph.split(":")[1]}
                                        </Typography>
                                      
                                    </Typography>
                                  ) : (
                                    paragraph
                                  )
                                      }

                                </Typography>
                              ))
                          ) : (
                            <Typography
                              variant="body1"
                              style={{ textAlign: "justify", fontSize: isMobile? "0.8rem" : "1rem" }}
                            >
                              {service.description}
                            </Typography>
                          )}
                        </Typography>
                        <Button onClick={() => handleExpand(service.badgeId)}>
                          Show Less
                        </Button>
                      </Box>
                    ) : (
                      <>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {service.description.substring(0, 70)}...
                        </Typography>
                        <Button onClick={() => handleExpand(service.badgeId)}>
                          View More
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Container maxWidth="md" sx={{ mt: "6rem" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 1, color: "#381630" , fontFamily: "'Lora', serif", }}
          >
            Clients Love!
          </Typography>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            pauseOnHover={true}
          >
            {testimonials.map((testimonial) => (
              <Box sx={{ mt: isMobile ? "0" : "-2rem", textAlign: "left" }}>
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  image={testimonial.image}
                  testimonial={testimonial.testimonial}
                  sx={{ fontSize: "200px" }}
                />
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </Box>
  );
};

