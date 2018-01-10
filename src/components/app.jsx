import React, { Component } from 'react'
import axios from 'axios'

import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import SearchBar from './search_bar.jsx'
import Table from './table.jsx'
import FileForm from './file_form.jsx'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            data: [

            ],
            params: {
                range: {

                }
            },
            result: '',
            resDiv: 'hidden-xs-up'
        }

        this.handleChange = this.handleChange.bind(this)
        this.setData = this.setData.bind(this)
        this.setQuery = this.setQuery.bind(this)
        this.logout = this.logout.bind(this)
    }

    setData(data) {
        this.setState({ data })
    }

    setQuery(params = {}) {
        this.setState({ params })
        console.log(params)
    }

    logout(e){
        axios.get('/logout')
        .then(res => {
            this.props.setAuth('')
            this.props.history.push('/')
        })
        .catch(err)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-inverse navbar-toggleable-md bg-inverse">
                    <a className="mr-auto navbar-brand" href="#">Employee Info Portal</a>

                    <div className="ml-auto">
                        <button onClick={this.logout} className="btn btn-outline-danger" type="button">Logout</button>
                    </div>

                </nav>

                <SearchBar setQuery={this.setQuery} setData={this.setData} />
                {
                    this.state.data.length > 0 ?
                        <Table params={this.state.params} stdData={this.state.data} />
                        :
                        null
                }


            </div>
        )
    }
}
