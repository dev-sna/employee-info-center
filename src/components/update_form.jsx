import React, { Component } from 'react'
import axios from 'axios'

export default class UpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serial: '',
            field: '',
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/update', {
            serial: this.state.serial,
            field: this.state.field,
            value: this.state.value
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <form action="/update" className="form-inline" onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col-md-1"></div>

                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="serial">Insert employee ID number select</label>
                                <input type="text" value={this.state.serial} name="serial" onChange={this.handleChange} required className="form-control" id="serial" placeholder="e.g. 12" />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="serial">Select a field to update</label>
                                <select value={this.state.field} onChange={this.handleChange} className="form-control" name="field" id="">
                                    <option value="serial">Serial</option>
                                    <option value="name">Name</option>
                                    <option value="father">Father's name</option>
                                    <option value="dob">Date of birth</option>
                                    <option value="doj">Date of joining</option>
                                    <option value="regulardate">Regular date</option>
                                    <option value="bps">BPS</option>
                                    <option value="designation">Designation</option>
                                    <option value="department">Department</option>
                                    <option value="qualification">Qualification</option>
                                    <option value="certifications">Certifications</option>
                                    <option value="cnic">CNIC</option>
                                    <option value="cell">Cell</option>
                                    <option value="address">Address</option>
                                    <option value="email">Email</option>
                                    <option value="domicile">Domicile</option>
                                    <option value="lpromo">Last promotion</option>
                                    <option value="ecat">Employee category</option>
                                </select>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="serial">Enter update</label>
                                <input type="text" value={this.state.value} name="value" onChange={this.handleChange} required className="form-control" id="serial" placeholder="e.g. 12" />
                            </div>
                        </div>
                        
                        
                        <div className="form-group">
                        <div className="col-md-2">
                        <label>&nbsp;</label>
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>
                        </div>

                    </div>
                </form>
            </div>


        )
    }
}