const { Router } = require('express')
const User = require("../models/user")
const router = Router()

router.get('/signin', (req, res) => {
    return res.render('signin')
})
router.get('/signup', (req, res) => {
    return res.render('signup')
})
router.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        debugger
        await User.create({ fullName, email, password })
        return res.redirect('/')
    } catch (error) {
        console.error('Error during signup:', error)
        // You can handle the error more gracefully here.
        return res.status(500).send('An error occurred during signup.')
    }
})


module.exports = router