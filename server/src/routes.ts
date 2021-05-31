import express from 'express'
import { getProdutos, postProduto, putProduto, deleteProduto } from './controllers/firebaseController'

const routes = express.Router()

routes.get('/produtos', getProdutos)
routes.post('/produtos', postProduto)
routes.put('/produtos', putProduto)
routes.delete('/produtos', deleteProduto)

export default routes
