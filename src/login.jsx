import React from 'react';
import { Form, Input } from 'antd'; 

function Login() {
  return (
    <div className="authentication">
      <div className="authentication-form card p-2">
        <h1 className="card-title">Sign in</h1>
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <button type="submit">Register</button> 
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
