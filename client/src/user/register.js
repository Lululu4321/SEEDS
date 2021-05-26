import React from 'react'
import { Form, Input, Button } from 'element-react'

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            condition: {
                user: '',
                pwd: '',
                email: ''
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
    register() {

    }
    render() {
        const { condition } = this.state;
        return <div id="login">
            <Form className="wrapper" model={condition} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
                <Form.Item label="email：">
                    <Input value={condition.email} onChange={this.onChange.bind(this, 'email')}></Input>
                </Form.Item>
                <Form.Item label="userName">
                    <Input value={condition.user} onChange={this.onChange.bind(this, 'user')}></Input>
                </Form.Item>
                <Form.Item label="password">
                    <Input value={condition.pwd} onChange={this.onChange.bind(this, 'pwd')}></Input>
                </Form.Item>
                <Form.Item label="">
                    <Button type="primary" onClick={this.register.bind(this)} icon="login">Submit</Button>
                </Form.Item>
                <p style={{ color: '#fff', display: 'inline' }}>or <a style={{ color: '#fff' }} href="/login">go back</a></p>

            </Form>
        </div>
    }
}