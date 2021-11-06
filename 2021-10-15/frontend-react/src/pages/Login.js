import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';
import { Link } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";

//Ant design näidis login, mida on kõvasti modifitseeritud ja serveri pool on ise tehtud
const Login = () => {
const [error, setError] = useState('')
const [tooltip, setTooltip] = useState('')
const [state, dispatch] = useContext(Context);
  const onFinish = values => {
    //console.log('Received values of form: ', JSON.stringify(values));
      fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
      }).then((data) => {
            setError(data);
            //console.log(data);
            return data.json() 
            
        }).then((json) => {
            if(json.token){
                dispatch(loginUser(json));
                console.log(state.auth)
                //console.log(JSON.stringify(json))
            }else{
                setTooltip(json) //siin sees on nt "password too short" vms vead, aga kuna see array mul selle kuvamine praegu ei läinud tööle
            }
            
          }).catch((err) =>{console.log(err)})
      
      
  };


  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
        <Form.Item> { error && <Alert
      banner
      message={
        <Marquee pauseOnHover gradient={false}>
          {error.statusText} 🤣 {error.status}
        </Marquee>
      }
    />}</Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">Registreeri</Link>
      </Form.Item>

    </Form>
  );
}
export default Login;