import axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form, Input, Typography } from 'antd';
const { Text } = Typography;

const loginAPI: string = 'https://reqres.in/api/login';

interface requestLogInBody {
  email: string;
  password: string;
}

export default function SignInModal() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState({isError: false, data: ''})
  const onSubmit = (values: {email: string, password: string}) => {
    let body: requestLogInBody = {
      email: values.email,
      password: values.password
    }

    axios.post(
      loginAPI,
      body
    ).then(response => {
      setMsg({isError: false, data:`Your response token is ${response.data.token}`});
    }).catch(error => {
      setMsg({isError: true, data: error.response.data.error});
    })
  };

  const onSubmitFailed = () => {
    setMsg({isError: true, data: ''});
  };
  return (
    <>
    <Button type="primary" onClick={() => {setVisible(true)}}>
      Sign in
    </Button>
    <Modal
      title="Sign in"
      centered
      visible={visible}
      footer={null}
      cancelText="Close form"
      onCancel={() => setVisible(false)}
      data-testid="signin-modal"
    >
      <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onSubmitFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input data-testid="input-email"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password data-testid="input-password"/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        {

          (msg.isError && msg.data !== '') ?
            <Text type="danger" data-testid="response-msg-danger">{msg.data}</Text> :
            <Text type="success" data-testid="response-msg-success">{msg.data}</Text>

        }
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    </Modal>
    </>
  );
}