import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../../assets/profile.png";
import { useTranslation } from "react-i18next";

interface HomeProps {
  // Additional props...
  home?: HomeType;
}

type HomeType = string | number | boolean;

const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing pattern
      //   once: false, // Whether animation should happen only once
      //   mirror: false, // Whether to reflect the animation in case of page flipping
    });
  }, []);

  const [glare, setGlare] = useState(false);

  return (
    <Box
      id="home"
      sx={{
        // height: "100vh",
        padding: {
          xs: 2, // Low padding for extra-small screens
          sm: 10, // Medium padding for small screens and above
        },
        fontSize: {
          xs: 10, // Smaller font size for extra-small screens
          sm: 30, // Default font size for small screens and above
        },
      }}
    >
      <Tilt
        className="parallax-effect"
        glareEnable={true}
        // glareMaxOpacity={0.45}
        glareColor="#1b1b1e"
        glarePosition="all"
        style={{
          transition: "background-color 0.3s ease", // Smooth transition on hover
        }}
        gyroscope={true}
        tiltAngleXInitial={-15}
        tiltAngleYInitial={15}
      >
        <Paper
          data-aos="fade-right"
          elevation={0}
          sx={{ bgcolor: "transparent", color: "#f3f7f0" }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" }, // Center on xs, left align on md
              alignItems: { xs: "center", md: "start" },
              height: "100%",
              textAlign: { xs: "center", md: "left" }, // Center text on xs
            }}
          >
            <Grid item xs={12} md={4}>
              <Avatar
                sx={{
                  width: { xs: 200, sm: 250, md: 400 },
                  height: { xs: 200, sm: 250, md: 400 },
                  margin: { xs: "0 auto", md: "0" }, // Center Avatar in xs
                  backgroundColor: "#202022 !important",
                }}
              >
                <img
                  src={profilePic}
                  alt="Profile Pic"
                  style={{
                    width: "100%",
                    height: "102%", // Adjusted to 100% to fill the Avatar properly
                    objectFit: "fill", // Maintain aspect ratio
                  }}
                />
              </Avatar>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,

                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography
                  sx={{
                    // color: "#f3f7f0",
                    fontSize: {
                      xs: 20, // Smaller font size for extra-small screens
                      sm: 30, // Default font size for small screens and above
                    },
                  }}
                >
                  {t("welcome")}
                </Typography>

                <Typography
                  className="typewriter-text"
                  sx={{
                    display: "inline-block",
                    color: "#9ba9ff",
                    // fontFamily: "Exo 2, sans-serif",
                    fontWeight: "bold",
                    fontSize: {
                      xs: 20, // Smaller font size for extra-small screens
                      sm: 25, // Default font size for small screens and above
                    },
                  }}
                >
                  <Typewriter
                    words={[
                      "I'm a Full Stack Developer",
                      "Proficient in React & Node.js",
                      "Passionate about coding",
                      "Lifelong learner",
                    ]}
                    loop={true}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Typography>
              </Box>
              <p>
                I'm a passionate and skilled Full-Stack Developer with
                experience in building dynamic, responsive, and scalable web
                applications. With expertise in both front-end and back-end
                development, I enjoy taking on challenges across the entire
                stack, from designing intuitive user interfaces to architecting
                robust server-side solutions.
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Tilt>
    </Box>
  );
};

export default Home;
