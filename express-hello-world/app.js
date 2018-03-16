// // Imports
// const express = require('express')
// // Instantiations
// const app = express()
// // Routes
// app.get('/', (req, res) => {
//     res.send({msg:'hello world'})
// })
// // Bootup
// app.listen(3000)

const express = require('express')
const app = express()

const profile = {
    username: 'azat',
    email: '[reducted]',
    url: 'http://azat.co'
}
app.get('/profile', (req, res)=>{
    res.send(profile)
})
app.post('/profile', (req, res) => {
    profile = req.body
    res.sendStatus(201)
})
app.put('/profile', (req, res)=>{
    Object.assign(profile, req.body)
    res.sendStatus(204)
})
app.delete('/profile', (req, res)=>{
    profile ={}
    res.sendStatus(204)
})

app.listen(3000)