import React, { useEffect, useState } from 'react'

import serverApi, { IDBItem } from '../services/serverApi'

import Header from '../components/header'
import SearchBar from '../components/searchBar'
import BlueButton from '../components/blueButton'
import ShopItem from '../components/shopItem'
import EditCard from '../components/editCard'

export default function Home(){

    const [shopList, setShopList] = useState([] as IDBItem[])
    const [editorVisible, setEditorVisible] = useState(false)
    const [addGameVisible, setAddGameVisible] = useState(false)
    const [currentEditing, setCurrentEditing] = useState(undefined as IDBItem | undefined)

    async function searchGames(){
        const input = document.getElementById("search-input") as HTMLInputElement
        const query = input.value

        const produtos = await serverApi.getProdutos(query)
        setShopList(produtos)
    }

    async function deleteGame(id: string){
        const alert = window.confirm("Tem certeza que quer apagar esse item?")
        if(alert){
            await serverApi.deleteProduto(id)
            createList()
        }
    }

    function openEditGame(dbItem: IDBItem){
        setCurrentEditing(dbItem)
        setAddGameVisible(false)
        setEditorVisible(true)
    }

    function openAddGame(){
        setEditorVisible(false)
        setAddGameVisible(true)
    }

    async function createList(){
        const produtos = await serverApi.getProdutos()
        setShopList(produtos)
    }

    async function confirmEdit(){
        const nomeInput = document.getElementById('editor-input-nome') as HTMLInputElement
        const precoInput = document.getElementById('editor-input-preco') as HTMLInputElement
        const imagemInput = document.getElementById('editor-input-imagem') as HTMLInputElement

        if(currentEditing && (nomeInput.value || precoInput.value || imagemInput.value)){
            const newGame = {} as {nome?: string, preco?: number, imagem?: string}

            // nao colocar string vazia
            if(nomeInput.value) newGame.nome = nomeInput.value
            if(precoInput.value) newGame.preco = Number.parseFloat(precoInput.value)
            if(imagemInput.value) newGame.imagem = imagemInput.value

            await serverApi.editProduto(currentEditing.id, newGame)
            createList()
        }
        setEditorVisible(false)
        setAddGameVisible(false)
    }

    function cancelEdit(){
        setEditorVisible(false)
        setAddGameVisible(false)
    }

    async function confirmAddGame(){
        const nomeInput = document.getElementById('editor-input-nome') as HTMLInputElement
        const precoInput = document.getElementById('editor-input-preco') as HTMLInputElement
        const imagemInput = document.getElementById('editor-input-imagem') as HTMLInputElement

        if(nomeInput.value && precoInput.value && imagemInput.value){
            const newGame = {
                nome: nomeInput.value,
                preco: Number.parseFloat(precoInput.value),
                imagem: imagemInput.value
            }

            await serverApi.postProduto(newGame)
            createList()
            setEditorVisible(false)
            setAddGameVisible(false)
        }else{
            alert("Produto invalido")
        }
    }

    useEffect(() => {
        createList()
    },[])

    return (
        <div style={style.container}>
            { editorVisible ? <EditCard currentEditing={currentEditing} cancelEdit={cancelEdit} confirmEdit={confirmEdit}/> : null }
            { addGameVisible ? <EditCard cancelEdit={cancelEdit} confirmEdit={confirmAddGame}/> : null }
            <Header addGameFunction={openAddGame}/>
            <div style={style.searchContainer}>
                <SearchBar/>
                <BlueButton onClick={searchGames} text={'Pesquisar'}/>
            </div>
            <div style={style.shopItemsContainer}>
                {
                    shopList.filter(produto => (produto.nome && produto.imagem && produto.preco))
                    .map((produto, index) => <ShopItem
                        key={index}
                        produto={produto}
                        deleteFunction={()=>deleteGame(produto.id)}
                        editFunction={()=>openEditGame(produto)}/> )
                }
            </div>
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    searchContainer: {
        display: 'flex',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140
    },
    shopItemsContainer: {
        display: 'grid',
        rowGap: 20,
        columnGap: 20,
        gridTemplateColumns: 'repeat(auto-fill, 140px)',
        width: '80%',
        marginTop: 50,
        flex: 1,
        overflow: 'hidden'
    }
}
