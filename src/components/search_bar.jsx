import React, { Component } from 'react'
import axios from 'axios'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            criteria: 'Name',
            value: '',
            range: {
                from: '',
                to: ''
            },
            result: '',
            resDiv: ''
        }

        this.handleCriteria = this.handleCriteria.bind(this)
        this.handleData = this.handleData.bind(this)
        this.handleFormOne = this.handleFormOne.bind(this)
        this.handleFormTwo = this.handleFormTwo.bind(this)
        this.handleRange = this.handleRange.bind(this)
    }

    handleCriteria(e) {
        if (e.target.type == 'checkbox') {
            this.setState(e.target.checked ? { criteria: 'BPS' } : { criteria: '' })
        }
        else {
            this.setState({ criteria: e.target.value, value: '' })
        }
        console.log(this.state.criteria)
    }

    handleData(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.value)
    }

    handleRange(e) {
        let name = e.target.name
        let range = this.state.range
        let newRange = {
            ...range,
            [name]: e.target.value
        }
        this.setState({ range: newRange })
        console.log(this.state.range)
    }

    handleFormOne(e) {
        e.preventDefault()
        this.props.setQuery({ key: this.state.criteria, value: this.state.value })
        axios
            .post('/search', {
                key: this.state.criteria,
                value: this.state.value
            })
            .then((response) => {
                this.props.setData(response.data)
            })
            .catch((error) => {
                this.setState({ result: "No data found", resDiv: 'errDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
    }
    handleFormTwo(e) {
        e.preventDefault()
        this.props.setQuery({ key: this.state.criteria, range: this.state.range })
        axios
            .post('/search', {
                key: this.state.criteria,
                range: {
                    from: this.state.range.from,
                    to: this.state.range.to
                }
            })
            .then((response) => {
                this.props.setData(response.data)
            })
            .catch((error) => {
                this.setState({ result: "No data found", resDiv: 'errDiv' })
                setTimeout(() => {
                    this.setState({ result: "", resDiv: 'hidden-xs-up' })
                }, 1500)
            })
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4"></div>
                    <div className={"col-xl-4 col-lg-4 col-md-4 " + this.state.resDiv}>
                        <p><span>{this.state.result}</span></p>
                    </div>
                </div>

                <form action="/search" method="post" onSubmit={this.handleFormOne} >
                    <div className="row">

                        <div className="col-md-2"></div>

                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="exampleSelect1">Search by..</label>
                                <select className="form-control" onChange={this.handleCriteria} value={this.state.criteria} name="criteria" id="exampleSelect1" required >
                                    <option value="">select</option>
                                    <option value="Name" >Name</option>
                                    <option value="Designation">Designation</option>
                                    <option value="Qualification" >Qualification</option>
                                    <option value="Department" >Department</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            {this.state.criteria == 'Name' ?
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input value={this.state.value} onChange={this.handleData} type="text" className="form-control" id="exampleInputEmail1" name="value" placeholder="Enter name" required />
                                </div>
                                :
                                this.state.criteria == 'Designation' ?
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Designation</label>
                                        <input value={this.state.value} onChange={this.handleData} type="text" className="form-control" name="value" id="exampleInputEmail1" placeholder="Enter designation" required />
                                    </div>
                                    :
                                    this.state.criteria == 'Qualification' ?
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Qualification</label>
                                            <input value={this.state.value} onChange={this.handleData} type="text" className="form-control" name="value" id="exampleInputEmail1" placeholder="Enter qualification" required />
                                        </div>
                                        :
                                        <div className="form-group">
                                            <label htmlFor="exampleSelect1">Select department</label>
                                            <select className="form-control" onChange={this.handleData} value={this.state.value} name="value" id="value" required>
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
                            }
                        </div>

                        <div className="form-group">
                            <div className="col-md-2">
                                <label>&nbsp;</label>
                                <input value="Submit" type="submit" className="btn btn-primary" />
                            </div>
                        </div>

                    </div>
                </form>
                <hr />
                <form action="/search-by-bps" method="post" onSubmit={this.handleFormTwo} >
                    <div className="row">

                        <div className="col-md-3"></div>

                        <div className="col-md-2">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input onChange={this.handleCriteria} type="checkbox" className="form-check-input" required />
                                    Search by BPS
                            </label>
                            </div>
                        </div>

                        <div className="col-md-3">

                            <label>Lower limit</label>
                            <input value={this.state.range.from} onChange={this.handleRange} type="text" className="form-control" name="from" placeholder="e.g. 7" />

                            <label>Upper Limit</label>
                            <input value={this.state.range.to} onChange={this.handleRange} type="text" className="form-control" name="to" placeholder="e.g. 12" />

                        </div>

                        <div className="form-group">
                            <div className="col-md-2">
                                <label>&nbsp;</label>
                                <input value="Submit" type="submit" className="btn btn-primary" />
                            </div>
                        </div>

                    </div>
                </form>
                <hr />
            </div>
        )

    }

}
export default SearchBar