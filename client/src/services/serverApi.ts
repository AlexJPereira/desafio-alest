import axios from 'axios'
import { serverConfig } from './config'

export interface IDBItem{
    id: string,
    imagem: string,
    nome: string,
    preco: number,
    data: number
}

export interface IProdutos{
    imagem: string,
    nome: string,
    preco: number,
    data: number
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

export async function getProdutos(query?: string){
    const produtos = await api.get('/produtos', {
        params: { query }
    })
    return produtos.data as IDBItem[]
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