import React, { Component } from 'react'
import axios from 'axios'

export default class InsertForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {

            },
            result: '',
            resDiv: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let data = this.state.data
        let name = e.target.name
        let myState = {
            ...data, [name]: e.target.value
        }
        this.setState({ data: myState })

    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/insert', {
            data: this.state.data
        })
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
            <div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4"></div>
                    <div className={"col-xl-4 col-lg-4 col-md-4 " + this.state.resDiv}>
                        <p><span>{this.state.result}</span></p>
                    </div>
                </div>

                <div>
                    <h2 className="text-center">Insertion Form</h2>
                    <form action="" id="insert" onSubmit={this.handleSubmit}>
                        <div className="row">

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Employee ID</label>
                                    <input onChange={this.handleChange} value={this.state.data.employeeid ? this.state.data.employeeid : ''} type="text" className="form-control" id="exampleInputEmail1" name="employeeid" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Name</label>
                                    <input onChange={this.handleChange} value={this.state.data.name ? this.state.data.name : ''} type="text" className="form-control" id="exampleInputEmail1" name="name" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Father</label>
                                    <input onChange={this.handleChange} value={this.state.data.father ? this.state.data.father : ''} type="text" className="form-control" id="exampleInputEmail1" name="father" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Date of Birth</label>
                                    <input onChange={this.handleChange} value={this.state.data.dob ? this.state.data.dob : ''} type="text" className="form-control" id="exampleInputEmail1" name="dob" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Date of joining</label>
                                    <input onChange={this.handleChange} value={this.state.data.doj ? this.state.data.doj : ''} type="text" className="form-control" id="exampleInputEmail1" name="doj" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Regular date</label>
                                    <input onChange={this.handleChange} value={this.state.data.regulardate ? this.state.data.regulardate : ''} type="text" className="form-control" id="exampleInputEmail1" name="regulardate" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Designation</label>
                                    <input onChange={this.handleChange} value={this.state.data.designation ? this.state.data.designation : ''} type="text" className="form-control" id="exampleInputEmail1" name="designation" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Department</label>
                                    <select className="form-control" onChange={this.handleChange} value={this.state.data.department ? this.state.data.department : ''} name="department" required>
                                        <option value="">...</option>
                                        <option value="Architecture & Planning">Architecture &amp; Planning</option>
                                        <option value="B.E Chemical">B.E Chemical</option>
                                        <option value="B.E Computer Systems">B.E Computer Systems</option>
                                        <option value="B.E Electronic">B.E Electronic</option>
                                        <option value="B.E Energy &amp; Environment">B.E Energy &amp; Environment</option>
                                        <option value="B.E Inductrial Engineering &amp; Management">B.E Inductrial Engineering &amp; Management</option>
                                        <option value="B.E Metallurgy & Material">B.E Metallurgy & Material</option>
                                        <option value="B.E Petroleum &amp; Gas">B.E Petroleum &amp; Gas</option>
                                        <option value="B.E Telecommunication">B.E Telecommunication</option>
                                        <option value="Registrar">Registrar</option>
                                        <option value="Accounts">Accounts</option>
                                        <option value="Human Resource">Human Resource</option>
                                        <option value="Examination">Examination</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Industrial Liason">Industrial Liason</option>
                                        <option value="Store">Store</option>
                                        <option value="Director ORIC">Director ORIC</option>
                                        <option value="Director QEC">Director QEC</option>
                                        <option value="Director CPD">Director CPD</option>
                                        <option value="Director Post Grad">Director Post Grad</option>
                                        <option value="Transport">Transport</option>
                                        <option value="Student Affairs">Student Affairs</option>
                                        <option value="Project Director">Project Director</option>
                                        <option value="Dean">Dean</option>
                                        <option value="Pro Vice Chancellor">Pro Vice Chancellor</option>
                                        <option value="Vice Chancellor">Vice Chancellor</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Qualification</label>
                                    <input onChange={this.handleChange} value={this.state.data.qualification ? this.state.data.qualification : ''} type="text" className="form-control" id="exampleInputEmail1" name="qualification" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >BPS</label>
                                    <input onChange={this.handleChange} value={this.state.data.bps ? this.state.data.bps : ''} type="text" className="form-control" id="exampleInputEmail1" name="bps" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Certifications</label>
                                    <input onChange={this.handleChange} value={this.state.data.certifications ? this.state.data.certifications : ''} type="text" className="form-control" id="exampleInputEmail1" name="certifications" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >CNIC</label>
                                    <input onChange={this.handleChange} value={this.state.data.cnic ? this.state.data.cnic : ''} type="text" className="form-control" id="exampleInputEmail1" name="cnic" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Cell</label>
                                    <input onChange={this.handleChange} value={this.state.data.cell ? this.state.data.cell : ''} type="text" className="form-control" id="exampleInputEmail1" name="cell" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Email</label>
                                    <input onChange={this.handleChange} value={this.state.data.email ? this.state.data.email : ''} type="text" className="form-control" id="exampleInputEmail1" name="email" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Address</label>
                                    <input onChange={this.handleChange} value={this.state.data.address ? this.state.data.address : ''} type="text" className="form-control" id="exampleInputEmail1" name="address" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Domicile</label>
                                    <input onChange={this.handleChange} value={this.state.data.domicile ? this.state.data.domicile : ''} type="text" className="form-control" id="exampleInputEmail1" name="domicile" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >File</label>
                                    <input onChange={this.handleChange} value={this.state.data.file ? this.state.data.file : ''} type="text" className="form-control" id="exampleInputEmail1" name="file" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label >Last promotion</label>
                                    <input onChange={this.handleChange} value={this.state.data.lpromo ? this.state.data.lpromo : ''} type="text" className="form-control" id="exampleInputEmail1" name="lpromo" required />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Employee Category</label>
                                    <select onChange={this.handleChange} className="form-control" value={this.state.data.ecat ? this.state.data.ecat : ''} name="ecat" required>
                                        <option value="">...</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Daily wage" >Daily wage</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-2">
                                    <label>&nbsp;</label>
                                    <input value="Submit" type="submit" className="btn btn-primary" />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}