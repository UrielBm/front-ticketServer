import React, { useContext, useState } from "react";
import SocketContext from "../context/Socket/SocketContext";
import { Row, Col, Divider, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Title from "../components/Title";
import useShowMenu from "../hooks/useShowMenu";

const { Text } = Typography;
const CreateTicket = () => {
  useShowMenu(true);
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);
  const handleGetTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title title="Obtenen tu Ticket" />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} align="center">
          <Text>presiona el bóton para obten tu ticket</Text>
        </Col>
      </Row>
      <Row justify="center" style={{ margin: "1rem 0" }}>
        <Col span={24} align="center">
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            onClick={handleGetTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <>
          <Row justify="center">
            <Col span={24} align="center">
              <Text>El número de ticket es:</Text>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24} align="center">
              <Title title={`${ticket.number}`} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default CreateTicket;
