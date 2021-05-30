import axios from 'axios'
import { serverConfig } from './config'

export interface IProdutos{
    imagem: string,
    nome: string,
    preco: number,
    data: string
}

export interface IEditConfig{
    nome?: string,
    preco?: number,
    imagem?: string
}

export interface IPostProdutoParams{
    imagem: string,
    nome: string,
    preco: number
}

const api = axios.create({
    baseURL: serverConfig.baseURL
})

export async function getProdutos(){
    const produtos = await api.get('/produtos')
    return produtos.data as IProdutos[]
}

export async function editProduto(id: string, config: IEditConfig){
    await api.put('/produtos', {id, ...config})
}

export async function postProduto(produto: IPostProdutoParams){
    const response = await api.post('/produtos', produto)
    return response
}

export async function deleteProduto(id: string){
    await api.delete('/produtos', { params: { id } })
}

const serverApi = {
    getProdutos,
    editProduto,
    postProduto,
    deleteProduto
}

export default serverApi