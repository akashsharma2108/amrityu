import * as React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  useMediaQuery,
  IconButton,
  Alert
} from "@mui/material";
import { Close }  from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import connecUS from "../assets/connecUS.jpg";
import "../App.css"

const useStyles = makeStyles({
  formControl: {
    width: "100%",
    marginBottom: "1rem",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "0.5rem",
  },
  submitButton: {
    marginTop: "1rem",
  },
});

interface sooterProps {
}

const ContactUs: React.FC<sooterProps> = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name || ""]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidation = validateForm(formData);
    setFormErrors(formValidation);
    if (Object.values(formValidation).every((error) => !error)) {
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const validateForm = (formValues: typeof formData) => {
    const errors = {
      name: formValues.name === "",
      email: !/\S+@\S+\.\S+/.test(formValues.email),
      phone: !/^\d{10}$/.test(formValues.phone),
      message: formValues.message === "",
    };
    return errors;
  };

  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
  };

  return (
    <Box
      sx={{
        height: "auto",
        marginBottom: "-1px",
        bgcolor: "white",
        display: "flex",
        padding: { xs: "2rem", md: "4rem" },
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${connecUS})`,
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ margin: 0, padisplay: "flex", flexDirection:  isMobile ? "row" : "column" }}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", alignItems: "center", flexDirection:isMobile ? "column" : "row" }}
        >
          <Box sx={{ width: isMobile? "100%":"50%", textAlign: "center" }}>
            {isMobile ? (
              <Typography variant="h5" sx={{ mb: 2, textAlign: "center" ,width : "100%",  color: "#FBEEE4",
              fontWeight: "bold", fontFamily: "'Lora', serif", }}>
                Connect With Me
              </Typography>
            ) : (
              <Typography
                variant="h3"
                sx={{
                  mt: "3rem",
                  mb: 2,
                  mr: "5rem",
                  alignItems: "center",
                  color: "#FBEEE4",
                  fontWeight: "bold",
                  fontFamily: "'Lora', serif",
                }}
              >
                Connect With Me
              </Typography>
            )}
           { isMobile? ( <Typography
              variant="body1"
              sx={{
                mb: 4,
                width: isMobile ? "100%" : "100%",
                textAlign: "justify",
                mr: "9rem",
                backgroundColor: "#38162F",
                color: "#fff",
                fontFamily: "'Lora', serif",
                fontSize: isMobile? "15px":"23px",
              }}
            >
              Are you looking for answers, or perhaps would like to receive
              confirmation that your life is on the right track? Whatever the
              reason may be, you’ve come to the right place. I love helping
              people develop the tools they need to cope with all of life’s
              challenges, and I get great satisfaction from seeing them heal and
              thrive. Contact me today and let the healing process begin.
              <br />{" "}
              <p style={{ textAlign: "left", fontSize: "20px",  fontFamily: "'Lora', serif", }}>
                Note : Only online sessions and classes available.
              </p>
            </Typography>):(<Typography
              variant="body1"
              sx={{
                mb: 4,
                textAlign: "justify",
                mr: "5rem",
                backgroundColor: "#38162F",
                color: "#fff",
                fontFamily: "'Lora', serif",
                fontSize: "23px",
              }}
            >
              Are you looking for answers, or perhaps would like to receive
              confirmation that your life is on the right track? Whatever the
              reason may be, you’ve come to the right place. I love helping
              people develop the tools they need to cope with all of life’s
              challenges, and I get great satisfaction from seeing them heal and
              thrive. Contact me today and let the healing process begin.
              <br />{" "}
              <p style={{ textAlign: "left", fontSize: "20px" ,  fontFamily: "'Lora', serif",}}>
                Note : Only online sessions and classes available.
              </p>
            </Typography>)}
          </Box>
          <Box
            sx={{
              width: isMobile? "100%":"50%",
              backgroundColor: "#FBEEE4",
              padding: "20px",
              borderRadius: "10px",
              mt: "1rem",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                sx={{ mb: 2, height: "50px" }}
                value={formData.name}
                onChange={handleInputChange}
                className={classes.formControl}
                error={formErrors.name}
                helperText={formErrors.name && "Please enter your name"}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                sx={{ mb: 2 }}
                onChange={handleInputChange}
                className={classes.formControl}
                error={formErrors.email}
                helperText={
                  formErrors.email && "Please enter a valid email address"
                }
              />
              <TextField
                label="Phone"
                variant="outlined"
                name="phone"
                value={formData.phone}
                sx={{ mb: 2 }}
                onChange={handleInputChange}
                className={classes.formControl}
                error={formErrors.phone}
                helperText={
                  formErrors.phone && "Please enter a 10-digit phone number"
                }
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={classes.formControl}
                multiline
                sx={{ mb: 2 }}
                rows={4}
                error={formErrors.message}
                helperText={formErrors.message && "Please enter a message"}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submitButton}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
      {submitSuccess && (
  <Snackbar
    open={submitSuccess}
    autoHideDuration={6000}
    onClose={handleCloseSnackbar}
    message="Form submitted successfully!"
    //add green color to snackbar
    action={
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleCloseSnackbar}
        >
          <Close fontSize="small" />
        </IconButton>
      </React.Fragment>
    }
  >
    <Alert onClose={handleCloseSnackbar} severity="success">
      Form submitted successfully!
    </Alert>
  </Snackbar>
  
  )}
    </Box>
  );
};

export default ContactUs;
