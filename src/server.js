const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')
const { use } = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br'
]

//habilita CORS - consumir api por um serciço front-end externo com dominio diferente
app.use(cors({
    origin: function (origin, callback) {
        let allowed = true

        //mobile app (nao tem origem)
        if (!origin) allowed = true

        //verificar se oringem esta em allowedOrigins
        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

//habilita sever para receber JSON
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))