const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require("./routes/user")
const app = express();
const PORT = 8000


app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({ extended: false }))
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

app.get('/', (req, res) => {
    res.render('home')
})
app.use('/user', userRoute)
app.listen(PORT, () => console.log(`server started at ${PORT}`))
mongoose.connect('mongodb://localhost:27017/blogify')
    .then(() => console.log('Mongodb Connected Successfully'))
    .catch(err => console.error('MongoDB Connection Error:', err))

