import firebase from 'firebase'
import config from '../config'

export interface IProduto{
    nome: string,
    data: number,
    preco: number,
    imagem: string
}

export interface IEditProduto{
    nome?: string,
    data?: number,
    preco?: number,
    imagem?: string
}

firebase.initializeApp(config.firebase)
const firestore = firebase.firestore()

const produtosCollectionName = 'produtos'

export async function getProdutos(config?: {limit?: number, offset?: number}){
    const snapshot = await firestore
        .collection(produtosCollectionName)
        .orderBy('data', 'asc')
        .startAfter(config?.offset || 0)
        .limit(config?.limit || 25)
        .get()
    
    const produtos = [] as IProduto[]

    snapshot.forEach(produto => {
        const produtoType = produto.data() as unknown
        produtos.push(produtoType as IProduto)
    })

    return produtos
}

export async function postProduto(produto: IProduto){
    const response = await firestore.collection(produtosCollectionName).add(produto)
    return response.id
}

export async function editProduto(id: string, config: IEditProduto){
    await firestore.collection(produtosCollectionName).doc(id).update(config)
}

export async function deleteProduto(id: string){
    await firestore.collection(produtosCollectionName).doc(id).delete()
}


export default {
    getProdutos,
    postProduto,
    editProduto,
    deleteProduto
}

