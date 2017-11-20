var router = require('express').Router();
var USERCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

// api from here down
router.get('/api/read', do_read);
router.post('/api/create', do_create);
router.put('/api/update', do_update);
router.delete('/api/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('reading all records');
    USERCLASS.find()
        .then(function (results) {
            console.log(results);
            res.json(results);
        });
}

function do_create(req, res) {
    console.log('creating records');
    console.log('req.body'); // = {user: 'bill}

    var user = new USERCLASS(req.body);
    user.save()
        .then(function (result) {
            console.log(result);
            res.json({
                message: 'saved'
            });
        });
}

function do_update(req, res) {
    console.log('updating records');
    console.log('req.body');

    var update = {
        $set: {
            user: req.body.user
        }
    }

    USERCLASS.findByIdAndUpdate(req.body._id, update)
        .then(function (result) {
            console.log(result);
            res.json({
                message: 'updated'
            });
        });
}

function do_delete(req, res) {
    console.log('deleting records');
    console.log('req.params');

    USERCLASS.findByIdAndRemove(req.params._id)
        .then(function (result) {
            console.log(result);
            res.json({
                message: 'deleted'
            });
        });
}