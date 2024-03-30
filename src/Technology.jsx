import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./Technology.css";
import Marquee from "react-fast-marquee";

function Technology() {
  const matches = useMediaQuery("(max-width:900px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)"
  );
  const Technologys = [
    {
      title: "React",
      img: "./assets/images/react.png",
    },
    {
      title: "MongoDB",
      img: "./assets/images/mongodb2.png",
    },
    {
      title: "SQL",
      img: "./assets/images/sql.png",
    },
    {
      title: "Webflow",
      img: "./assets/images/webflow.png",
    },
    {
      title: ".Net",
      img: "./assets/images/net.png",
    },
    {
      title: "Node",
      img: "./assets/images/node.png",
    },
    {
      title: "React Native",
      img: "./assets/images/react native.png",
    },
    {
      title: "Angular",
      img: "./assets/images/angular.png",
    },
    {
      title: "Phython",
      img: "./assets/images/Phython.png",
    },
    {
      title: "Django",
      img: "./assets/images/Django.png",
    },
  ];

  return (
    <Box>
      <Box sx={{ backgroundColor: "#eae1f7" }} p={2}>
        <Container className="container" my={3}>
          <Typography
            variant="h6"
            fontWeight={"500"}
            fontSize={matches ? "8vw" : "3vw"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Technologies Covered
          </Typography>
          <Box>
            <Marquee>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              mb={3}
              >
                {Technologys.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      height: "120px",
                      width: "170px",
                      margin: "0 5px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={item.img}
                      style={{
                        width: "25%",
                        height: "auto",
                      }}
                    />
                    <Typography
                      pt={2}
                      style={{ fontSize: "20px", fontWeight: "600" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Marquee>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Technology;
