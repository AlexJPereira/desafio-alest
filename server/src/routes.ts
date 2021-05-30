import express, {Request, Response} from 'express'

const routes = express.Router()

function test(text: string, req: Request, res: Response){
    console.log(text)
    res.send("ok")
}

routes.get('/produtos', (request, response)=>test("get", request, response))
routes.post('/produtos', (request, response)=>test("post", request, response))
routes.put('/produtos', (request, response)=>test("put", request, response))
routes.delete('/produtos', (request, response)=>test("delete", request, response))

export default routes
