const router = require('express').Router()

router.get('/clientes', (req, res) => {
    res.send({
        ok: 1234
    })
})

module.exports = router