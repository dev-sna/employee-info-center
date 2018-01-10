const
    router = require('express').Router(),
    db = require('../database/handler'),
    xlr = require('xlr');

router.post('/export', (req, res) => {

    const conf = {
        stylesXmlFile: './styles.xml',
        name: 'EmployeeData',
        columns: [
            // { type: 'string', width: 10 },
            { type: 'string', width: 10 },  // Serial
            { type: 'string', width: 30 },  // Name
            { type: 'string', width: 30 },  // Father name
            { type: 'string', width: 15 },  // Date of Birth

            { type: 'string', width: 15 },  // Date of join
            { type: 'string', width: 15 },  // Regular date
            { type: 'string', width: 5 },   // BPS
            { type: 'string', width: 20 },  // Designation
            { type: 'string', width: 20 },  // Department

            { type: 'string', width: 20 },  // Qualification
            { type: 'string', width: 20 },  // Certifications
            { type: 'string', width: 15 },  // CNIC
            { type: 'string', width: 15 },  // Cell
            { type: 'string', width: 40 },  // Email

            { type: 'string', width: 50 },  // Adress
            { type: 'string', width: 15 },  // Domicile
            { type: 'string', width: 10 },  // File
            { type: 'string', width: 10 },  // Employee ID
            { type: 'string', width: 15 },  // Last promotion
    
            { type: 'string', width: 15 }   // Employee category
        ],
        rows: []
    };

    db.search(req.body, (err, data) => {
        console.log('Exported from DATABASE');
        if (err) res.status(404).send({ error: 'NO-DATA' });

        else if (data.length === 0)
            res.status(404).send({ error: 'NO-DATA' });
        else {

            let headers = [
                // { value: 'ID', style: '1' },
                { value: 'S. No.', style: '1' },
                { value: 'Name', style: '1' },
                { value: 'Father Name', style: '1' },
                { value: 'DOB', style: '1' },

                { value: 'Date of Join', style: '1' },
                { value: 'Regular Date', style: '1' },
                { value: 'BPS', style: '1' },
                { value: 'Designation', style: '1' },
                { value: 'Department', style: '1' },

                { value: 'Qualification', style: '1' },
                { value: 'Certifications', style: '1' },
                { value: 'CNIC', style: '1' },
                { value: 'Cell', style: '1' },
                { value: 'Email', style: '1' },

                { value: 'Address', style: '1' },
                { value: 'Domicile', style: '1' },
                { value: 'File', style: '1' },
                { value: 'Employee ID', style: '1' },
                { value: 'Last Promotion', style: '1' },

                { value: 'Employee Category', style: '1' },

            ];
            conf.rows.push(headers);

            data.map((item, i) => {
                let temp = [];
                for (val of Object.entries(item)) {

                    // convert null to string nuil
                    let d = val[1] !== null ? val[1] : "null";

                    // if the column is id replace the id with i+1
                    if(val[0] === 'id') d = i + 1;
                    temp.push(d);
                    
                }
                // console.log(item);
                // console.log(temp.length);
                conf.rows.push(temp);
            });

            const result = xlr(conf);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats');
            res.setHeader('Content-Disposition', 'attachment; filename=Employee.xlsx');
            res.send(new Buffer(result, 'binary'));
        }
    });
});


module.exports = router; 