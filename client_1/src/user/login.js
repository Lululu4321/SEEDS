import React from 'react'
import { Form, Input, Button } from 'element-react'
import './login.css'
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            condition: {
                user: '',
                pwd: ''
            }
        }
    }
    onSubmit(e) {
        e.preventDefault();
    }
    onChange(key, value) {
        this.setState({
            condition: Object.assign({}, this.state.condition, { [key]: value })
        })
    }
    login() {
        this.props.history.push('/p/home')
    }
    render() {
        const { condition } = this.state;
        return <div id="login">
            <Form className="wrapper" model={condition} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
                <Form.Item label="userName：">
                    <Input value={condition.user} onChange={this.onChange.bind(this, 'user')}></Input>
                </Form.Item>
                <Form.Item label="password：">
                    <Input type="password" value={condition.pwd} onChange={this.onChange.bind(this, 'pwd')}></Input>
                </Form.Item>
                <Form.Item label="">
                    <Button type="primary" onClick={this.login.bind(this)} icon="login">Login</Button>
                </Form.Item>
                <p style={{ color: '#fff', display: 'inline' }}>or <a style={{ color: '#fff' }} href="/register">Sign Up</a></p>
            </Form>
        </div>
    }
}