import axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form, Input, Typography } from 'antd';
const { Text } = Typography;

interface requestBody {
  email: string;
  password: string;
}

export default function SignInModal() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState({isError: false, data: ''})
  const onFinish = (values: any) => {
    console.log('Success:', values.email);
    let body: requestBody = {
      email: values.email,
      password: values.password
    }
    
    axios.post(
      'https://reqres.in/api/login',
      body
    ).then(response => {
      setMsg({isError: false, data:`Your response token is ${response.data.token}`});
    }).catch(error => {
      setMsg({isError: true, data:JSON.parse(error.request.response).error});
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    setMsg({isError: true ,data: ''});
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
    onCancel={() => setVisible(false)}

    >
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        {

          (msg.isError && msg.data !== '') ?
            <Text type="danger">{msg.data}</Text> :
            <Text type="success">{msg.data}</Text>

        }
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Modal>
    </>
  );
}