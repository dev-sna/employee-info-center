const
    router = require("express").Router(),
    crypto = require('crypto'),
    multer = require('multer'),
    db = require('../database/handler');

// Multer Storage 
// const storageSetting = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './temp/')
//     },
//     filename: function (req, file, cb) {
//         var fileNameT = "";

//         crypto.pseudoRandomBytes(16, function (err, raw) {

//             if (err) return console.log(err);

//             fileNameT = raw.toString("hex");

//             if (file.mimetype === "application/vnd.ms-excel" || file.mimetype === "text/csv")
//                 fileNameT += ".csv";

//             cb(null, fileNameT);
//         });
//     }
// });

// Multer Configuration
const multerConfigured = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10000000      // Limit in bytes
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== "application/vnd.ms-excel" && file.mimetype !== "text/csv") {
            return cb(new Error("Invalid"));
        }

        cb(null, true);
    }
});

const fileUpload = multerConfigured.single("mainFile");

router.post("/upload", function (req, res) {

    // If upload failed, render error
    fileUpload(req, res, function (error) {
        if (error) return res.status(400).send(error);
        else {
            // console.log('File upload called');
            let csvString = req.file.buffer.toString();
            let csvData = csvString
                .split(/\r\n|\r|\n/g)
                .filter(data => data !== '')
                .map(data => data.split(','));

            // console.log(csvData);

            db.bulkInsert(csvData, (err, data) => {
                if (err) return res.status(500).send({ error: err });

                res.send('SUCCESS');
            });
        }
    });
});

module.exports = router;