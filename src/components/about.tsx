import {
  Box,
  Grid,
  Typography,
  CardMedia,
  useMediaQuery,
  List,
  ListItem,
} from "@mui/material";
import about1 from "../assets/about1.jpg";
import fg from "../assets/fg.png";
import aboutus from "../assets/aboutus.jpg";
import aboutus2 from "../assets/aboutus2.png";
import "../App.css";

interface AboutProps {
}

export const AboutUs: React.FC<AboutProps> = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");
  return (
    <>
      <Box sx={{ p: isMobile ? 1 : 4, Height: "100vh" }}>
        <Grid item xs={12} md={6}>
          {isMobile? (<CardMedia
            component="img"
            image={aboutus2}
            alt="About Us"
            sx={{ height: "280px", mb: "0.8rem" }}
          />):(<CardMedia
            component="img"
            image={about1}
            alt="About Us"
            sx={{ height: "600px", mb: "2rem" }}
          />)}
        </Grid>

        <Box sx={{ mt: "2 rem" }}>
          <div
            className="about"
            style={{
              backgroundColor: "#FBEEE4",
              backgroundImage: isMobile
                ? ``
                : `url(${aboutus})`,
              backgroundSize: "cover",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center", mb: "2 rem", minHeight:isMobile?   "0" : "60vh" }}>
                <Box
                  sx={{
                    height: "auto",
                    width: isMobile ? "auto" : "60%",
                    m: "auto",
                    p: "1rem",
                  }}
                >
                  {isMobile ? (
                    <Typography
                      variant="h5"
                      className="playfair"
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: "#381630",
                        fontWeight: "bold",
                        fontFamily: "'Lora', serif",
                      }}
                    >
                      About Me
                    </Typography>
                  ) : (
                    <Typography
                      variant="h3"
                      className="playfair"
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: "#381630",
                        fontFamily: "'Lora', serif",
                      }}
                    >
                      About Me
                    </Typography>
                  )}
                  <img
                    src={fg}
                    alt="logo"
                    style={{
                      height: 50,
                      width: isMobile ? 200 : 300,
                      marginTop: "-2rem",
                    }}
                  />
                  {isMobile ? (
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "justify",
                        fontSize: "0.8rem",
                        lineHeight: "1.2",
                        fontFamily: "'Lora', serif",
                        backgroundColor: "#FBEEE4",
                      }}
                    >
                      Hi, I am Nikita, a psychic healer, an intuitive tarot card
                      reader, and a numerologist.
                      <br />
                      <p style={{ marginBottom: "1px" }}>
                        With constant feeling of non-belongingness and being
                        lost with immense number of questions in my head for my
                        ‘Soul’s Journey called Life’, and with my life-long
                        inner urge to help and act as a soul friend in someone’s
                        story, the universe played its part and transformed my
                        meaningless rollercoaster world into an awakened and
                        serene world of spirituality.
                      </p>
                      <br />
                      By receiving directions by divine, I add the essence of
                      clarity and truth in my spiritual counselling through
                      tarot and oracle cards, numerology, and intuitive
                      guidance.
                      <br />
                      <p style={{ marginBottom: "1px" }}>
                        Together, let us initiate the journey of your soul's
                        evolution and development, transformation and growth,
                        and inner healing, ultimately aligning you with your
                        higher self and bringing forth awareness and healing by
                        opening your spiritual potential.
                      </p>
                      <br />
                      <p style={{ marginTop: "1px" }}>
                        I look forward to connecting with you!
                      </p>
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "justify",
                        fontSize: "1.3rem",
                        lineHeight: "1.4",
                        letterSpacing: "2px",
                        fontFamily: "'Lora', serif",
                      }}
                    >
                      Hi, I am Nikita, a psychic healer, an intuitive tarot card
                      reader, and a numerologist.
                      <br />
                      With constant feeling of non-belongingness and being lost
                      with immense number of questions in my head for my ‘Soul’s
                      Journey called Life’, and with my life-long inner urge to
                      help and act as a soul friend in someone’s story, the
                      universe played its part and transformed my meaningless
                      rollercoaster world into an awakened and serene world of
                      spirituality.
                      <br />
                      By receiving directions by divine, I add the essence of
                      clarity and truth in my spiritual counselling through
                      tarot and oracle cards, numerology, and intuitive
                      guidance.
                      <br />
                      Together, let us initiate the journey of your soul's
                      evolution and development, transformation and growth, and
                      inner healing, ultimately aligning you with your higher
                      self and bringing forth awareness and healing by opening
                      your spiritual potential.
                      <br />I look forward to connecting with you!
                    </Typography>
                  )}
                </Box>
              </Box>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ textAlign: "center", mb: "2 rem", minHeight:isMobile? "auto" :"60vh" }}
                >
                  <Box
                    sx={{
                      height: "auto",
                      width: isMobile ? "auto" : "60%",
                      m: "auto",
                      p: "1rem",
                    }}
                  >
                    {isMobile ? (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            mt: 2,
                            textAlign: "left",
                            fontWeight: "bold",
                            color: "#381630",
                            fontFamily: "'Lora', serif",
                          }}
                        >
                          How do I get to serve a purpose in your journey!
                        </Typography>
                        <List
                          sx={{
                            textAlign: "justify",
                            fontSize: "0.8rem",
                            lineHeight: "2",
                            letterSpacing: "1px",
                            listStyleType: "disc",
                            backgroundColor: "#FBEEE4",
                            ml: 1,
                            pl: 2,
                            "& .MuiListItem-root": {
                              display: "list-item",
                            },
                          }}
                        >
                          <ListItem>
                          Cleansing your mind, body, and spirit and helping you experience a renewed sense of balance and well-being.
                          </ListItem>
                          <ListItem>
                          Channelling divine energy to promote physical, emotional, and spiritual healing, in turn helping you to achieve a state of harmony in your lives and feel or co-create the magic of love.
                          </ListItem>
                          <ListItem>
                          Working on a deep energetic level to restore stability and activate your inner healing abilities.
                          </ListItem>
                          <ListItem>
                          Discover the freedom to truly be yourself, and reconnect with your truth. Divinity tools are your gateway to access your infinite potential and possibilities through the higher vibrations whenever you want them.
                          </ListItem>
                          <ListItem>
                          These divinity tools help you on your spiritual journey and assist you in unlocking your full potential, connecting with your higher self, experiencing spiritual transformation, release blockages which in turn helps you to transform your life.
                          </ListItem>
                        </List>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="h3"
                          sx={{
                            mb: 2,
                            mt: 2,
                            color: "#381630",
                            textAlign: "left",
                            fontFamily: "'Lora', serif",
                          }}
                        >
                          How do I get to serve a purpose in your journey!
                        </Typography>

                        <List
                          sx={{
                            textAlign: "justify",
                            fontSize: "1.3rem",
                            lineHeight: "2",
                            letterSpacing: "1px",
                            listStyleType: "disc",
                            pl: 2,
                            "& .MuiListItem-root": {
                              display: "list-item",
                            },
                          }}
                        >
                          <ListItem>
                          Cleansing your mind, body, and spirit and helping you experience a renewed sense of balance and well-being.
                          </ListItem>
                          <ListItem>
                          Channelling divine energy to promote physical, emotional, and spiritual healing, in turn helping you to achieve a state of harmony in your lives and feel or co-create the magic of love.
                          </ListItem>
                          <ListItem>
                          Working on a deep energetic level to restore stability and activate your inner healing abilities.
                          </ListItem>
                          <ListItem>
                          Discover the freedom to truly be yourself, and reconnect with your truth. Divinity tools are your gateway to access your infinite potential and possibilities through the higher vibrations whenever you want them.
                          </ListItem>
                          <ListItem>
                          These divinity tools help you on your spiritual journey and assist you in unlocking your full potential, connecting with your higher self, experiencing spiritual transformation, release blockages which in turn helps you to transform your life.
                          </ListItem>
                        </List>
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};
