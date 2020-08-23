const express = require('express');
const router = express.Router();
const { check, valodationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @descr   Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please iclude a valid email').isEmail(),
    check('password', 'Please enter a password with 6 characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = valodationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    res.send('passed')
  }
);

module.exports = router;
