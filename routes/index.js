var express = require('express');
var router = express.Router();

var userSchema = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teranis 23' });
});

router.post('/login', async function(req, res, next) {
  console.log(req.body);
  const newUser = new userSchema({
    email: req.body.email,
    password: req.body.password
  });

  await newUser.save();
  res.send("User created successfully");
});

router.get('/get-users', async function (req, res, ) {

  const users = await userSchema.find();

  res.send(users)

})

module.exports = router;
