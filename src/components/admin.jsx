import React, { Component } from 'react'
import SearchBar from "./search_bar.jsx";
import Table from './table.jsx'
import FileForm from './file_form.jsx'
import InsertForm from './insert_form.jsx'
import DeleteForm from './delete_form.jsx'
import UpdateForm from './update_form.jsx'
import table from './table.jsx';

import axios from 'axios'

export default class Admin extends Component {

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
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.setData = this.setData.bind(this)
        this.setQuery = this.setQuery.bind(this)
        this.logout = this.logout.bind(this)
    }

    logout(e){
        axios.get('/logout')
        .then(res => {
            this.props.setAuth('')
            this.props.history.push('/')
        })
        .catch(err)
    }

    setData(data) {
        this.setState({ data })
    }

    setQuery(params = {}) {
        this.setState({ params })
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
                        <button className="btn btn-outline-danger" onClick={this.logout} type="button">Logout</button>
                    </div>

                </nav>

                <SearchBar setQuery={this.setQuery} setData={this.setData} />
                <FileForm/>
                <hr/>
                <InsertForm/>
                <hr/>
                <DeleteForm/>
                <hr/>
                <UpdateForm/>
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