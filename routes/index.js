const express = require('express')
const router = express.Router()
const{ensureAuth, ensureGuest} = require('../middleware/auth')

// @dsk Login/Landing page
//@route GET/
router.get('/', ensureGuest, (req,res)=>{
    res.render('login', {
        layout: 'login',
    })
})
// @dsk Dashboard
//@route GET/
router.get('/dashboard', ensureAuth, (req,res)=>{
    console.log(req.user)
    res.render('dashboard')
})
module.exports = router