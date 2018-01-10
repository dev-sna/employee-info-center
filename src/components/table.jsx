import React, { Component } from 'react'
import axios from 'axios'
import FileDownload from 'react-file-download'

function importHere(props) {
    let { key, value = null, range = null } = props.params
    console.log(range)
    axios({
        url: '/export',
        responseType: 'blob',
        method: 'post',
        data: {
        key,
        value: value ? value : null,
        range: range ? range : null
        }
    }).then(res => {
        FileDownload(res.data, 'Employee.xlsx')
    })
}

function handleChange(e){
    console.log(e.target.value)
}

export default (props) => {

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr className="table-success">
                        <th>Serial</th>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Father</th>
                        <th>DOB</th>
                        <th>DOJ</th>
                        <th>Regular Date</th>
                        <th>BPS</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Qualification</th>
                        <th>Certifications</th>
                        <th>CNIC No</th>
                        <th>Cell</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Domicile</th>
                        <th>File</th>
                        <th>Last Promotion</th>
                        <th>Employee Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.stdData.map((item,i) => {
                        return <tr key={item.id}>
                            <td>{i}</td>
                            <td>{item.employeeid}</td>
                            <td>{item.name}</td>
                            <td>{item.father}</td>
                            <td>{item.dob}</td>
                            <td>{item.doj}</td>
                            <td>{item.regulardate} </td>
                            <td>{item.bps}</td>
                            <td>{item.designation} </td>
                            <td>{item.department} </td>
                            <td>{item.qualification} </td>
                            <td>{item.certifications}</td>
                            <td>{item.cnic} </td>
                            <td>{item.cell}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.domicile}</td>
                            <td>{item.file}</td>
                            <td>{item.lpromo}</td>
                            <td>{item.ecat}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button onClick={() => importHere(props)} className="btn btn-outline-primary" type="button">Import Excel Sheet</button>
        </div>
    )
}
