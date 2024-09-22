import React from "react";
import { Row, Col, Card, Statistic, Timeline, Divider } from "antd";
import {
  ClockCircleOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import "./About.css"; // Optional: for custom styling
import { Box } from "@mui/material";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h1 className="about-title">About Me</h1>
      <Divider />

      {/* Statistics Section */}
      <Row gutter={12} className="stats-row">
        <Col xs={12} md={8} span={5}>
        <Card className="stat-card">
  <Statistic
    title="Years of Experience"
    value={3}
    prefix={<ClockCircleOutlined style={{ color: "white" }} />}
    style={{ color: "white" }} // Apply white color to the text
  />
</Card>
        </Col>
        <Col xs={12} md={8}>
          <Card className="stat-card">
            <Statistic
              title="Projects Completed"
              value={35}
              prefix={<CodeOutlined />}
            />
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card className="stat-card">
            <Statistic
              title="Tech Stacks Mastered"
              value={10}
              prefix={<DeploymentUnitOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Box sx={{ px: 5, width: "100%" }}>
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
