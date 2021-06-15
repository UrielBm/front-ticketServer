import React, { useContext } from "react";
import Uicontext from "../context/Uicontext/Uicontext";
import { Form, Input, Button, InputNumber } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 17,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 16,
  },
};

const FormRegister = () => {
  const { SaveAgente } = useContext(Uicontext);
  const history = useHistory();
  const onFinish = ({ agente, escritorio }) => {
    SaveAgente(agente, escritorio);
    history.push("/desktop");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre del ejecutivo"
        name="agente"
        rules={[
          {
            required: true,
            message: "Ingresa tu nombre",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="No de Escritorio"
        name="escritorio"
        rules={[
          {
            required: true,
            message: "Ingresa el número de escritorio",
          },
        ]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<SaveOutlined />}
          ghost
          size={240}
        >
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormRegister;
