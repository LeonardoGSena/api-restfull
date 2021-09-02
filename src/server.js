const express = require('express')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))