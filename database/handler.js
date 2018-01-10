const
    mysql = require('mysql'),
    db = require('../config/db'),
    hashForPass = 'F25900499E177CAEF2344630A93AD1DDF43CF47',
    crypto = require('crypto');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

db.connect(function (err) {
    if (err) {
        if (err.code === 'ECONNREFUSED') return console.error('ERROR: DATABASE IS OFFLINE.');
        console.error('ERROR ' + err.stack);
        return;
    }

    console.log('SUCCESS: Connected to the database.');
});

module.exports = {

    // SEARCH
    search(query, callback) {
        // console.log(query);

        if (query.key && query.value) {
            let statement = `SELECT * FROM ${db.tableName} WHERE ${query.key.toLowerCase()} = ${db.escape(query.value)}`;
            db.query(statement, function (error, results, fields) {
                if (error) return callback(error, null);
                return callback(null, results);
            });
        }

        // from and to should be string
        else if (query.key && query.range && query.range.from && query.range.to) {
            db.query(`SELECT * FROM ${db.tableName} WHERE bps BETWEEN ${db.escape(query.range.from)} AND ${db.escape(query.range.to)} `, function (error, results, fields) {
                if (error) return callback(error, null);
                // console.log(results);
                return callback(null, results);
            });
        }

        else {
            return callback(null, null);
        }
    },

    // GET ALL DATA
    getAll(callback) {
        db.query(`SELECT * FROM ${db.tableName}`, function (error, results, fields) {
            if (error) return callback(error, null);
            return callback(null, results);
        });
    },

    // ADD A DATA
    add(data, callback) {
        // console.log(data.data.name);

        db.query(`INSERT INTO ${db.tableName} (name, father, dob, doj, regulardate, bps, designation, department, 
            qualification, certifications, cnic, cell, email, address, domicile, file, 
            employeeid, lpromo, ecat) 
            
            VALUES (
                
                ${ db.escape(data.data.name)},
                ${ db.escape(data.data.father)},
                ${ db.escape(data.data.dob)}, 
                ${ db.escape(data.data.doj)}, 
                
                ${ db.escape(data.data.regulardate)},
                ${ db.escape(data.data.bps)},
                ${ db.escape(data.data.designation)},
                ${ db.escape(data.data.department)},
                ${ db.escape(data.data.qualification)},

                ${ db.escape(data.data.certifications)},
                ${ db.escape(data.data.cnic)},
                ${ db.escape(data.data.cell)},
                ${ db.escape(data.data.email)},
                ${ db.escape(data.data.address)},
                
                ${ db.escape(data.data.domicile)},
                ${ db.escape(data.data.file)},
                ${ db.escape(data.data.employeeid)},
                ${ db.escape(data.data.lpromo)},
                ${ db.escape(data.data.ecat)}
            
            )`, function (error, results, fields) {
                if (error) return callback(error, null);
                return callback(null, results);
            });
    },

    bulkInsert(data, callback) {
        data.splice(0, 1);

        data.map((data, index) => {
            let dataObject = {
                // serial: data[0],
                name: data[1],
                father: data[2],
                dob: data[3],
                doj: data[4],

                regulardate: data[5],
                bps: data[6],
                designation: data[7],
                department: data[8],
                qualification: data[9],

                certifications: data[10],
                cnic: data[11],
                cell: data[12],
                email: data[13],
                address: data[14],

                domicile: data[15],
                file: data[16],
                employeeid: data[17],
                lpromo: data[18],
                ecat: data[19]
            };

            this.add({ data : dataObject }, (err) => {
                if (err) return callback(err, null);
            });

            if (index % 50 === 0) sleep(5000);
        });

        return callback(null, 'SUCCESS');
    }, 

    // UPDATE A DATA
    update(data, callback) {
        // console.log(data);
        if(!(data.serial && data.field && data.value)) return callback('NODATA', null);

        let statement = `UPDATE ${db.tableName} SET ${ data.field } = ${ db.escape(data.value) } WHERE employeeid = ${ db.escape(data.serial)}`;

// console.log(statement);

        db.query(statement, function (error, results, fields) {
                if (error) return callback(error, null);
                return callback(null, results);
            });
    },

    // REMOVE A DATA
    remove(data, callback) {
        if(!data) return callback('NODATA', null);
        let statement = `DELETE FROM ${db.tableName} WHERE employeeid = ${db.escape(data.serial)}`;
        db.query(statement, function (error, results, fields) {
            if (error) return callback(error, null);
            return callback(null, results);
        });
    },

    authenticate(username, password, callback) {

        let statement = `SELECT password FROM ${db.sessionTableName} WHERE username = ${db.escape(username)}`;

        db.query(statement, (error, results, fields) => {
            if (error || results.length === 0) return callback('FAIL');

            const hash = crypto.createHmac('sha256', hashForPass).update(password).digest('hex');

            if (hash === results[0].password) {

                return callback(null, 'SUCCESS');
            }
            else return callback('FAIL', null);

        });
    }
}