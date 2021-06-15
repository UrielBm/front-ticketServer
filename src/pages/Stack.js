import React, { useContext, useEffect, useState } from "react";
import SocketContext from "../context/Socket/SocketContext";
import { Row, Col, Divider, List, Card, Tag, Typography } from "antd";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import useShowMenu from "../hooks/useShowMenu";
const { Text } = Typography;
const Stack = () => {
  const [tickets, setTickets] = useState([]);
  useShowMenu(true);
  const { socket } = useContext(SocketContext);
  useEffect(() => {
    socket.on("ticket-asignado", (data) => setTickets(data));
    return () => {
      socket.off("ticket-asignado");
    };
  }, [socket]);
  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch(
          "https://ticket-socket-server.herokuapp.com/lastones"
        );
        const formatData = await response.json();
        const { lastTickets } = formatData;
        setTickets(lastTickets);
      } catch (error) {
        console.log(error);
      }
    };
    handleData();
  }, []);
  return (
    <>
      <Row>
        <Col span={24}>
          <Title title="fila de espera" />
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={24} sm={24} md={8} lg={10} xl={10} align="center">
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <Card
                  style={{ width: "100%", textAlign: "start" }}
                  actions={[
                    <Tag color="volcano">Agente: {ticket.agente}</Tag>,
                    <Tag color="magenta"> Escritorio: {ticket.escritorio}</Tag>,
                  ]}
                >
                  <Subtitle subtitle={`No. Ticket ${ticket.number}`} />
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={10} xl={10}>
          <Divider> Historial </Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(ticket) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket no. ${ticket.number}`}
                  description={
                    <>
                      <Text type="secondary">en el escritorio: </Text>
                      <Tag color="magenta">{ticket.escritorio}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{ticket.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Stack;
