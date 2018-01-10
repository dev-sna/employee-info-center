const
    router = require('express').Router(),
    db = require('../database/handler');

router.get('/data', (req, res) => {

    db.getAll((err, data) => {
        if (err) res.status(404).send({ error: err });

        else if (data.length === 0)
            res.status(404).send({ error: 'NO-DATA' });
        else
            res.send(data);
    });
});

router.post('/insert', (req, res) => {

    db.add(req.body, (err, data) => {
        if (err) {
            // console.log(err);
            res.status(404).send({ error: err });
        
        }
        else if (data.affectedRows !== 0)
            res.send('SUCCESS');
    });

});

router.post('/update', (req, res) => {
    
    db.update(req.body, (err, data) => {
        if (err) {
            // console.log(err);
            res.status(404).send({ error: err });
        }
        else if (data.affectedRows !== 0)
            res.send('SUCCESS');
    });

});

router.post('/delete', (req, res) => {
    db.remove(req.body, (err, data) => {
        if (err) res.status(404).send({ error: err });

        else if (data.affectedRows !== 0)
            res.send('SUCCESS');
    });
});

module.exports = router;