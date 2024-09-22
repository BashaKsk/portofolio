import React from "react";
import { Row, Col, Card, Statistic, Timeline, Divider, Flex } from "antd";
import {
  ClockCircleOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import "./About.css"; // Optional: for custom styling
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h1 className="about-title">About Me</h1>
      <Divider />

      {/* Statistics Section */}
      <Row gutter={[20, 20]} className="stats-row">
        <Col data-aos="fade-in" data-aos-duration="500" xs={24} md={8} span={5}>
          <Card className="stat-card">
            <Typography style={{ color: "white" }}>
              Years of Experience
            </Typography>
            <Flex justify="center" gap={5}>
              <ClockCircleOutlined style={{ color: "white" }} />
              <p>12</p>
            </Flex>
          </Card>
        </Col>
        <Col data-aos="fade-in" data-aos-duration="700" xs={24} md={8}>
          <Card className="stat-card">
            <Typography style={{ color: "white" }}>
              Projects Completed
            </Typography>
            <Flex justify="center" gap={5}>
              <CodeOutlined style={{ color: "white" }} />
              <p>35</p>
            </Flex>
          </Card>
        </Col>
        <Col data-aos="fade-in" data-aos-duration="900" xs={24} md={8}>
          <Card className="stat-card">
            <Typography style={{ color: "white" }}>
              Tech Stacks Mastered
            </Typography>
            <Flex justify="center" gap={5}>
              <DeploymentUnitOutlined style={{ color: "white" }} />
              <p>10</p>
            </Flex>
          </Card>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Box
        data-aos="zoom-out"
        data-aos-duration="1000"
        className="about-container"
        sx={{ px: 5, width: "100%" }}
      >
        <Card className="timeline-card">
          <Timeline mode="alternate">
            <Timeline.Item>
              Graduated with a Computer Science Degree (2015)
            </Timeline.Item>
            <Timeline.Item color="green">
              Started working as a Full-Stack Developer (2016)
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              Lead development team in a SaaS product (2018)
            </Timeline.Item>
            <Timeline.Item color="red">
              Built and launched multiple web apps (2019-2021)
            </Timeline.Item>
            <Timeline.Item color="green">
              Started contributing to open-source projects (2022)
            </Timeline.Item>
            <Timeline.Item>
              Founded my own tech blog "Ksk Snippets" (2023)
            </Timeline.Item>
          </Timeline>
        </Card>
      </Box>
    </div>
  );
};

export default About;
