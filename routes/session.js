const
    router = require('express').Router(),
    db = require('../database/handler'),
    crypto = require('crypto');

router.post(['/login', '/adminlogin'], (req, res) => {
    
    if(req.path === '/adminLogin' && req.body.username !== 'admin') 
        res.status(400).send({ error : 'FAIL' });

    else if(req.body.username && req.body.password){
        db.authenticate(req.body.username, req.body.password, (err, data) => {
            if(err) res.status(400).send({ error : err });
            else {
                req.session.user = req.body.username;
                res.send('SUCCESS');
            } 
        });
    } 
});

router.get('/logout', (req, res) => {
    req.session.user = null;
    res.send('SUCCESS');
});


router.get('/hash/:data', (req, res) => {
    res.send(crypto.createHmac('sha256', 'F25900499E177CAEF2344630A93AD1DDF43CF47').update(req.params.data).digest('hex'));
});

module.exports = router;