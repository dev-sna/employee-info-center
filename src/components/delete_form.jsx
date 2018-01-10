import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serial: '',
            result: '',
            resDiv: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ serial: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/delete', {
            serial: this.state.serial
        })
            .then(res => {
                console.log(res)
                this.setState({ result: "Operation Successful", resDiv: 'resDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
            .catch(err => {
                console.log(err)
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
                    <form action="/delete" className="form-inline" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="serial">Enter the Employee ID number to delete the record (refer to table)</label>
                            <input type="text" value={this.state.serial} name="serial" onChange={this.handleChange} required className="form-control" id="serial" placeholder="e.g. 12" />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}