import React from "react";
import { Row, Col, Card } from "antd";
import {
  JavaScriptOutlined,
  //   TypeScriptOutlined,
  //   Html5Outlined,
  //   NodeOutlined,
  //   DatabaseOutlined,
  //   ApiOutlined,
  //   PythonOutlined,
  //   SqlOutlined,
  //   ReactOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./Technologies.css"; // Optional: for custom styling

const technologies = [
  { name: "JavaScript", icon: <JavaScriptOutlined /> },
  { name: "TypeScript", icon: <JavaScriptOutlined /> },
  { name: "React", icon: <JavaScriptOutlined /> },
  { name: "Next.js", icon: <JavaScriptOutlined /> }, // Change icon as needed
  { name: "Node.js", icon: <JavaScriptOutlined /> },
  { name: "Nest.js", icon: <JavaScriptOutlined /> }, // Change icon as needed
  { name: "MongoDB", icon: <JavaScriptOutlined /> },
  { name: "Python", icon: <JavaScriptOutlined /> },
  { name: "SQL", icon: <JavaScriptOutlined /> },
];

const TechnologiesPage = () => {
  return (
    <div id="tech" className="technologies-container">
      <h1 className="technologies-title">Technologies I Know</h1>
      <Row gutter={16} justify="center">
        {technologies.map((tech) => (
          <Col xs={12} sm={8} md={6} lg={4} key={tech.name}>
            <Card className="tech-card" hoverable>
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TechnologiesPage;
