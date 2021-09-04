const router = require('express').Router()
const ProductController = require('../controllers/products')
//verbos HTTP (4 tipos)
/* 
Get - Obter dados
Post - Enviar/Receber dados
Put - Atuallizar dados
Delete - Remover dados
*/


router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
// router.put('/products/id', ProductController.put)
// router.delete('/products/id', ProductController.delete)

module.exports = router