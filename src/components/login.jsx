import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ausername: '',
            apassword: '',
            username: '',
            password: '',
            result: '',
            resDiv: 'hidden-xs-up'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        e.target.id == 'adminlogin' ?
            axios.post(e.target.action, {
                username: this.state.ausername,
                password: this.state.apassword
            }).then(res => {
                this.props.setAuth('admin')
                this.props.history.push('/admin')
            }).catch(err => {
                this.setState({ result: "Login Failed", resDiv: 'errDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
            :
            axios.post(e.target.action, {
                username: this.state.username,
                password: this.state.password
            }).then(res => {
                this.props.setAuth('user')
                this.props.history.push('/dock')
            }).catch(err => {
                this.setState({ result: "Login Failed", resDiv: 'errDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-inverse navbar-toggleable-md bg-inverse">
                    <a className="mr-auto navbar-brand" href="#">Employee Info Portal</a>

                    <form action="/adminlogin" method="post" className="form-inline ml-auto" onSubmit={this.handleSubmit} id="adminlogin" >
                        <label className="navbar-text" htmlFor="">Admin login</label>
                        <input value={this.state.ausername} onChange={this.handleChange} name="ausername" className="form-control" type="text" placeholder="..." required />
                        <input value={this.state.apassword} onChange={this.handleChange} name="apassword" className="form-control" type="password" placeholder="..." required />
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form>

                </nav>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4"></div>
                    <div className={"col-xl-4 col-lg-4 col-md-4 " + this.state.resDiv}>
                        <p><span>{this.state.result}</span></p>
                    </div>
                </div>

                <div id="login" className="row">

                    <div className="col-lg-4 col-md-3"></div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4>Featured</h4>
                            </div>
                            <div className="card-block">
                                <form action="/login" method="post" onSubmit={this.handleSubmit} id="login">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email or username</label>
                                        <input type="text" value={this.state.username} name="username" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="..." required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="..." required />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}