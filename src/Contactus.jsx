import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WebIcon from "@mui/icons-material/Web";
import { useMediaQuery } from "@mui/material";
import Fade from "react-reveal/Fade";

function Contactus() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)"
  );

  return (
    <Box
      style={{
        backgroundImage: 'url("./assets/images/home.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight={"500"}
          my={2}
          textAlign="center"
          padding="10px"
          color="white"
          fontSize={isSmallScreen ? "8vw" : "3vw"}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          Partner with TamTree for expert solutions, training, and staffing that
          fuel your technological endeavors. Let us be the catalyst for your
          innovation and transformation journey.
        </Typography>
        <Grid container spacing={2} my={4}>
          <Grid item xs={12} md={7}>
            <Grid container rowGap={3}>
              <Grid item xs={12} md={7}>
                <Fade left>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textAlign: isSmallScreen ? "center" : "left",
                      marginBottom: "-20px",
                    }}
                  >
                    Address
                  </Typography>
                </Fade>
              </Grid>
              <Grid
                item
                container
                spacing={0}
                justifyContent={isSmallScreen ? "center" : "flex-start"}
                marginLeft={isSmallScreen ? "unset" : "6px"}
              >
                <Fade bottom duration={2000} cascade>
                  <Grid item marginTop={"20px"}>
                    <Typography
                      variant="body1"
                      fontSize="20px"
                      fontWeight={600}
                      color="white"
                      sx={{
                        textDecorationThickness: "2px",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        marginBottom: "15px",
                        marginLeft: isSmallScreen ? "25px" : "-7px",
                      }}
                    >
                      <LocationOnIcon
                        sx={{
                          color: "white",
                        }}
                      />
                      India Office:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize="17px"
                      sx={{
                        color: "white",
                        marginLeft: isSmallScreen ? "20%" : "unset",
                      }}
                    >
                      <p> 1/62 kilsathambur</p>
                      <p>Namakkal </p>
                      <p>Tamilnadu</p>
                      <p>India</p>
                      <p>637207</p>
                      Phone:+91 6369669424
                    </Typography>
                  </Grid>
                </Fade>
                <Fade bottom duration={2500} cascade>
                  <Grid item marginTop={"20px"}>
                    <Typography
                      variant="body1"
                      fontSize="20px"
                      fontWeight={600}
                      color="white"
                      sx={{
                        textDecorationThickness: "2px",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        marginBottom: "15px",
                        marginLeft: isSmallScreen ? "24px" : "-8px",
                      }}
                    >
                      <LocationOnIcon sx={{ color: "white" }} />
                      USA Office:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize="16px"
                      sx={{
                        color: "white",
                        marginLeft: isSmallScreen ? "20%" : "unset",
                      }}
                    >
                      <p>5900 Blcones Drive</p>
                      <p>STE 100 Austin,TX 78731</p>
                      <p>Phone:+1(972) 523-2289</p>
                    </Typography>
                  </Grid>
                </Fade>
                <Fade bottom duration={3000} cascade>
                  <Grid item marginTop={"20px"}>
                    <Box
                      sx={{
                        marginRight: "60px",
                        marginLeft: isSmallScreen ? "60px" : "30px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontSize="20px"
                        fontWeight={600}
                        color="white"
                        sx={{
                          textDecorationThickness: "2px",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          marginBottom: "20px",
                        }}
                      >
                        <WebIcon sx={{ color: "white" }} />
                        Website
                      </Typography>

                      <Typography
                        variant="body2"
                        fontSize="17px"
                        sx={{
                          color: "white",
                          marginBottom: "50px",
                        }}
                      >
                        <p>tamtreellc.com</p>
                      </Typography>
                    </Box>
                  </Grid>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              display: "flex",
              justifyContent: isMediumScreen
                ? "flex-end"
                : isSmallScreen
                ? "center"
                : "initial",
            }}
          >
            <Fade right>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "20px",
                  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="h6">Send Message</Typography>
                <Grid container spacing={2} textAlign={"center"}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      margin="normal"
                      required
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      margin="normal"
                      required
                      type="email"
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      margin="normal"
                      required
                      multiline
                      rows={4}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      style={{ marginBottom: "10px" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contactus;
