var router = require('express').Router();
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
router.delete('/api/delete/:id', do_delete);

