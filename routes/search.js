const
    router = require('express').Router(),
    db = require('../database/handler');

router.post('/search', (req, res) => {

    db.search(req.body, (err, data) => {
        if (err) res.status(404).send({ error: err });

        else if (data.length === 0)
            res.status(404).send({ error: 'NO-DATA' });
        else
            res.send(data);
    });

});

module.exports = router;