import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Avatar, Box, Grid, Paper } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../../assets/profile.png";
import { useTranslation } from "react-i18next";
import { Popover, Steps, Typography } from "antd";
import {
  TrophyOutlined,
  CheckOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { StepsProps } from "antd";
interface HomeProps {
  // Additional props...
  home?: HomeType;
}

const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

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
  const description = "You can hover on the dot.";
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
        glareMaxOpacity={0.45}
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
          data-aos="zoom-in"
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
                  flexDirection: "column",
                  height: "400px",
                  justifyContent: "space-between",
                  // alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,

                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "30px",
                      color: "#f3f7f0",
                    }}
                    // sx={{
                    //   // color: "#f3f7f0",
                    //   fontSize: {
                    //     xs: 20, // Smaller font size for extra-small screens
                    //     sm: 30, // Default font size for small screens and above
                    //   },
                    // }}
                  >
                    {t("welcome")}
                  </Typography>

                  <Typography
                    className="typewriter-text"
                    style={{
                      display: "inline-block",
                      color: "#dda15e",
                      // fontFamily: "Exo 2, sans-serif",
                      fontWeight: "bold",
                      fontSize: "30px",
                      // fontSize: {
                      //   xs: 20, // Smaller font size for extra-small screens
                      //   sm: 25, // Default font size for small screens and above
                      // },
                    }}
                  >
                    <Typewriter
                      words={[
                        "Full Stack Developer",
                        "Passionate Coder",
                      ]}
                      loop={true}
                      cursor
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </Typography>
                </Box>
                <Box sx={{ mt: 0 }}>
                  <Steps
                    current={4}
                  
                    
                    items={[
                      {
                        title: "Role",
                        description: (
                          <div>
                            <p>
                              I'm a Full Stack Developer, proficient in React
                              and Node.js. I'm passionate about coding, and I'm
                              a lifelong learner.
                            </p>
                          </div>
                        ),
                        icon: (
                          <Box
                            sx={{
                              bgcolor: "#f3f7f0",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 5,
                            }}
                          >
                            <UserOutlined
                              style={{ fontSize: "35px", color: "#7209b7" }}
                            />
                          </Box>
                        ),
                      },
                      {
                        title: "Identity",
                        description: (
                          <div>
                            <p>
                              As a professional developer, I take pride in
                              delivering clean, efficient, and scalable code
                              while constantly improving my skills.
                            </p>
                          </div>
                        ),
                        icon: (
                          <Box
                            sx={{
                              bgcolor: "#f3f7f0",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 5,
                            }}
                          >
                            <SolutionOutlined
                              style={{ fontSize: "30px", color: "#f72585" }}
                            />
                          </Box>
                        ),
                      },
                      {
                        title: "Projects",
                        description: (
                          <div>
                            <p>
                              I have successfully completed over 50 projects,
                              ranging from small business websites to complex
                              web applications.
                            </p>
                          </div>
                        ),
                        icon: (
                          <Box
                            sx={{
                              bgcolor: "#f3f7f0",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 5,
                            }}
                          >
                            <CheckOutlined
                              style={{ fontSize: "30px", color: "#00171f" }}
                            />
                          </Box>
                        ),
                      },
                      {
                        title: "Certifications",
                        description: (
                          <div>
                            <p>
                              I am certified in key technologies such as React,
                              Node.js, and MongoDB, showcasing my proficiency
                              and commitment to continuous learning.
                            </p>
                          </div>
                        ),
                        icon: (
                          <Box
                            sx={{
                              bgcolor: "#f3f7f0",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 5,
                            }}
                          >
                            <TrophyOutlined
                              style={{ fontSize: "30px", color: "red" }}
                            />
                          </Box>
                        ),
                      },
                    ]}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Tilt>
    </Box>
  );
};

export default Home;

// import React from 'react';
// import type { StepsProps } from 'antd';
// import { Popover, Steps } from 'antd';

// const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
//   <Popover
//     content={
//       <span>
//         step {index} status: {status}
//       </span>
//     }
//   >
//     {dot}
//   </Popover>
// );
// const description = 'You can hover on the dot.';
// const App: React.FC = () => (

// );

// export default App;
