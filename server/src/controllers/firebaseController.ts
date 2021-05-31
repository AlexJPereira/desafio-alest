import { Request, Response } from 'express'

import firebaseApi from '../services/firebaseApi'

export interface IPostProdutoBody{
    nome: string,
    preco: number,
    imagem: string
}

export interface IPutProdutoBody{
    id: string,
    nome?: string,
    preco?: number,
    imagem?: string
}

export async function getProdutos(request: Request, response: Response){
    const params = request.query as {limit?: number, offset?: number, query?: string}
    try{
        const produtos = await firebaseApi.getProdutos(params)
        response.send(produtos)
    }catch(err){
        console.log(err)
        response.sendStatus(500)
    }
}

export async function postProduto(request: Request, response: Response){
    const body = request.body as IPostProdutoBody
    if(body.imagem && body.nome && body.preco){

        const date = new Date()
        const newProduto = {
            imagem: body.imagem,
            nome: body.nome,
            preco: body.preco,
            data: date.getTime()
        }

        try{
            await firebaseApi.postProduto(newProduto)
            response.sendStatus(200)
        }catch(err){
            console.log(err)
            response.sendStatus(500)
        }

    }else{
        response.sendStatus(400)
    }
}

export async function putProduto(request: Request, response: Response){
    const body = request.body as IPutProdutoBody
    if(body.id && (body.imagem || body.nome || body.preco)){

        // solucao simples para remover os undefined
        const newProduto = JSON.parse(JSON.stringify({
            imagem: body.imagem,
            nome: body.nome,
            preco: body.preco
        }))

        try{
            await firebaseApi.editProduto(body.id,  newProduto)
            response.sendStatus(200)
        }catch(err){
            if(err.code === 'not-found')
                response.sendStatus(404)
            
            console.log(err)
            response.sendStatus(500)
        }

    }else{
        response.sendStatus(400)
    }
    
}

export async function deleteProduto(request: Request, response: Response){
    const params = request.query
    if(params.id){
        try{
            await firebaseApi.deleteProduto(params.id.toString())
            response.sendStatus(200)
        }catch(err){
            if(err.code === 'not-found')
                response.sendStatus(404)
            
            console.log(err)
            response.sendStatus(500)
        }
    }else{
        response.sendStatus(400)
    }

}