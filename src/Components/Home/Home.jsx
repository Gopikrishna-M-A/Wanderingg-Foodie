import React, { useState, useEffect } from "react";
import { Layout, Space, Avatar, Row, Col, Typography } from "antd";

const { Text, Title, Link } = Typography;
const { Footer, Content } = Layout;



export default function Home() {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>

        <Content className="content">

          <Row className="First-box">

            <Col>
              <Avatar size={64} src={require('./logos/logo.png')} />
            </Col>

            <Col className="Title-box">
            <Title className="h1" level={2}>Wanderingg Foodie</Title>
            <Text className="secondary" type="secondary">Digital Creator</Text>
            </Col>

          </Row>
          
          <Title className="desc" level={5}>Food Buff | Solo Wanderer | Tale Teller</Title>
          <Row className="second-box">
          <Text type="secondary">SHAIN | TRAVEL THE WORLD WITH ME!</Text>
          <Link href="https://www.instagram.com/wanderingg_foodie/?hl=en" target="_blank">@wanderingg_foodie</Link>
          </Row>

          <Row className="third-box">
          <Link className="icon-link" href="https://www.tiktok.com/@wanderingfoodie?lang=en" target="_blank"><Avatar className="icons" src={require('./logos/tiktok.png')} /></Link>
          <Link className="icon-link" href="https://www.facebook.com/people/wanderingg_foodie/100063618180148/" target="_blank"><Avatar className="icons" src={require('./logos/facebook.png')} /></Link>
          <Link className="icon-link" href="https://www.instagram.com/wanderingg_foodie/?hl=en" target="_blank"><Avatar className="icons" src={require('./logos/instagram.png')} /></Link>
          <Link className="icon-link" href="https://www.youtube.com/channel/UC0Iws137nObLZ0_DtUixruw" target="_blank"><Avatar className="icons" src={require('./logos/youtube.png')} /></Link>
          <Link className="icon-link" href="https://www.threads.net/@wanderingg_foodie" target="_blank"><Avatar className="icons" src={require('./logos/threads.png')} /></Link>
          <Link className="icon-link" href="mailto:wanderinggfoodie@gmail.com" target="_blank"><Avatar className="icons" src={require('./logos/email.png')} /></Link>
          </Row>
          
        </Content>

        <Footer className="Footer">

        <Text type="secondary">© Wanderingg Foodie {currentYear}</Text>
          
        </Footer>
      </Layout>
    </Space>
  );
}
