import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginSubmitHandle = async (e) => {
        e.preventDefault()

        try {

            const loginList = {
                email : email,
                password : password
            }

            const {data, status} = await axios.post('http://localhost:9090/api/users/login', loginList)

            if (status === 200) {

                alert('success login')

                localStorage.setItem('token', data.token)

                navigate('/profile')
            }



        } catch (err) {
            console.log(err.massage)
        }

    }


    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col xs={12} md={6} className={'mt-5'}>
                    <Form onSubmit={loginSubmitHandle}>

                        <h1>Login</h1>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        <Form.Text className="text-muted mt-3">
                            <Link to={'/find/email'}>
                                아이디를 잊어버리셨습니까?
                            </Link>
                            <Link to={'/forgot/password'} className={'ml-2'}>
                                비밀번호를 잊어버리셨습니까?
                            </Link>
                        </Form.Text>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;