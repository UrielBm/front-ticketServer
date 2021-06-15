import React, { useContext, useState } from "react";
import SocketContext from "../context/Socket/SocketContext";
import Uicontext from "../context/Uicontext/Uicontext";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import useShowMenu from "../hooks/useShowMenu";
import { Redirect, useHistory } from "react-router-dom";
const { Text } = Typography;
const Desktop = () => {
  const history = useHistory();
  const { agente, escritorio, DeleteAgente } = useContext(Uicontext);
  const { socket } = useContext(SocketContext);
  const [newticket, setNewticket] = useState(null);
  useShowMenu(false);

  const handleClose = () => {
    DeleteAgente();
    history.replace("/register");
  };
  const handleNextTicket = () => {
    socket.emit(
      "siguiente-ticket",
      { agente, escritorio },
      (siguienteTicket) => {
        setNewticket(siguienteTicket);
      }
    );
  };
  if (!agente || !escritorio) {
    return <Redirect to="/register" />;
  }
  return (
    <>
      <Row>
        <Col span={24}>
          <Title title="Ambiente escritorio" />
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <Col sm={24} md={18} lg={20}>
          <Subtitle subtitle={`Hola, ${agente}`} />
          <Text>usted esta trabando en el escritorio </Text>
          <Text type="success">{escritorio}</Text>
        </Col>
        <Col sm={24} md={6} lg={4}>
          <Button
            shape="round"
            danger
            icon={<CloseCircleOutlined />}
            onClick={handleClose}
          >
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {newticket ? (
        <Row>
          <Col span={18} sm={24}>
            <Text>usted esta atendiendo al ticket</Text>
            <Subtitle subtitle={`${newticket.number}`} />
          </Col>
        </Row>
      ) : (
        <Text type="secondary">
          presiona siguiente para ver si hay tickets pendientes
        </Text>
      )}
      <Row justify="end">
        <Col lg={4} sm={24}>
          <Button shape="round" type="primary" ghost onClick={handleNextTicket}>
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
