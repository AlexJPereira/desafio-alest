import express, {Request, Response} from 'express'
import { getProdutos, postProduto, putProduto, deleteProduto } from './controllers/firebaseController'

const routes = express.Router()

function test(text: string, req: Request, res: Response){
    console.log(text)
    res.send("ok")
}

routes.get('/produtos', getProdutos)
routes.post('/produtos', postProduto)
routes.put('/produtos', putProduto)
routes.delete('/produtos', deleteProduto)

export default routes
