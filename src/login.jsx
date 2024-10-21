import React from 'react';
import { Form, Input } from 'antd'; 
import './index.css';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/Login", values); 
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to Home page"); 
        localStorage.setItem("token", response.data.token); 
        navigate("/"); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-2">
        <h1 className="card-title">Sign in</h1>
        <Form layout="vertical" onFinish={onFinish}> 
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
            <button type="submit">Login</button> 
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
