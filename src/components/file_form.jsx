import React, { Component } from 'react'
import axios from 'axios'
import FormData from 'form-data'

export default class FileForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            file: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ file: e.target.files[0] })
        console.log(e.target.files[0])
    }
    handleSubmit(e) {
        e.preventDefault()
        let data = new FormData()
        let file = this.state.file
        data.append('mainFile', file)
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post('/upload', data, config)
            .then(res => {
                this.setState({ result: "Operation Successful", resDiv: 'resDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
            .catch(err => {
                this.setState({ result: "Operation Failed", resDiv: 'errDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
    }

    render() {
        return (
            <div className="row">

                <div className="col-xl-4 col-lg-4 col-md-4"></div>
                <div className={"col-xl-4 col-lg-4 col-md-4 " + this.state.resDiv}>
                    <p><span>{this.state.result}</span></p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4"></div>

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form action="/upload" onSubmit={this.handleSubmit} method="post" className="form-inline" >
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" onChange={this.handleChange} name="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                        </div>

                        <div className="form-group">
                            <label>&nbsp;</label>
                            <input value="Submit" type="submit" className="btn btn-primary" />

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}