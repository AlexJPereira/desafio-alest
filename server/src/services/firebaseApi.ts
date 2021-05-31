import admin from 'firebase-admin'
import config from '../config'

export interface IDBItem{
    id: string,
    nome: string,
    data: number,
    preco: number,
    imagem: string
}

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

admin.initializeApp({
    credential: admin.credential.cert(config.firebaseAdmin)
})
const firestore = admin.firestore()

const produtosCollectionName = 'produtos'

export async function getProdutos(config?: {limit?: number, offset?: number, query?: string}){
    let snapshot = await firestore
        .collection(produtosCollectionName)
        .orderBy('nome', 'asc')
        .startAfter(Number(config?.offset || 0))
        .limit(Number(config?.limit || 10000))
        .get()

    const produtos = [] as IDBItem[]

    snapshot.forEach(produto => {
        const produtoType = produto.data()
        const nome = produtoType.nome as string

        if(!config?.query || (nome.toLowerCase().indexOf(config.query.toLowerCase()) >= 0))
            produtos.push({
                id: produto.id,
                data: produtoType.data,
                imagem: produtoType.imagem,
                nome: produtoType.nome,
                preco: produtoType.preco
            } as IDBItem)
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

