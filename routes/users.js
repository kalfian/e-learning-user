var express = require('express');
var router = express.Router();

const userHandler = require('./handler/user')

/* GET users listing. */
router.get('/:id', userHandler.getUser);

router.post('/register', userHandler.register)
router.post('/login', userHandler.login)
router.put('/:id', userHandler.update)

module.exports = router;
