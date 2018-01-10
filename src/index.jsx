import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import axios from 'axios'

import Login from './components/login.jsx'
import App from './components/app.jsx'
import Admin from './components/admin.jsx'


const history = createBrowserHistory();

class Main extends Component {

    constructor(props){
        super(props)

        this.state = {
            auth: ''
        }
        this.componentWillMount = this.componentWillMount.bind(this)
        this.setAuth = this.setAuth.bind(this)
    }

    componentWillMount(){
        axios.get('*')
        .then(res => {
            console.log(res)
            res.data != '' ?
            this.setState({auth: res.data})
            : null
            console.log(this.state.auth)
        })
        .catch(err => {
            console.log(err)
            this.setState({auth: ''})
        })
    }

    setAuth(auth){
        this.setState({auth: auth})
        console.log('auth set to: ',this.state.auth)
    }

    render() {
        return (
            <Router history={history} >
                <div>
                    <Route path="/" render={() => this.state.auth == 'admin' ? <Redirect to="/admin" /> : this.state.auth == 'user' ? <Redirect to="/dock" />  : <Login auth={this.state.auth} setAuth={this.setAuth} history={history} /> } exact  />
                    <Route path="/dock" exact render={() => this.state.auth == 'admin' ? <Redirect to="/admin" /> : this.state.auth == '' ? <Redirect to="/" /> : <App auth={this.state.auth} setAuth={this.setAuth} history={history} />  } />
                    <Route path="/admin" exact render={() => this.state.auth == 'user' ? <Redirect to="/dock" /> : this.state.auth == '' ? <Redirect to="/" /> : <Admin auth={this.state.auth} setAuth={this.setAuth} history={history} />  } />
                </div>
            </Router>

        )
    }
}
ReactDOM.render(<Main />, document.getElementById("root"))