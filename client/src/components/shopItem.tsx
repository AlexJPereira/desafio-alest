import React from 'react'
import { IProdutos } from '../services/serverApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export interface IShopItemProps{
    produto: IProdutos,
    editFunction: () => void,
    deleteFunction: () => void
}

export default function ShopItem(props: IShopItemProps){
    return (
        <div style={style.container}>
            <div style={style.detailsContainer}>
                <h1 style={style.text}>{props.produto.nome}</h1>
                <div>
                    <img style={style.imagem} src={props.produto.imagem} alt={'no pic'}/>
                </div>
                <h1 style={style.text}>{"R$" + props.produto.preco.toFixed(2)}</h1>
            </div>
            <div style={style.buttonsContainer}>
                <button style={style.lbutton} onClick={props.editFunction}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                <button style={style.rbutton} onClick={props.deleteFunction}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 250,
        width: 130,
        backgroundColor: '#232129',
        justifySelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    imagem: {
        maxHeight: 130,
        width: 'auto'
    },
    text: {
        color: '#cccccc',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 14,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxHeight: 20,
        maxWidth: 100,
        whiteSpace: 'nowrap'
    },
    lbutton: {
        flex: 1,
        border: 'none',
        backgroundColor: '#2039cc',
        height: 30,
        borderBottomLeftRadius: 10,
        marginRight: 2
    },
    rbutton: {
        flex: 1,
        border: 'none',
        backgroundColor: '#2039cc',
        height: 30,
        borderBottomRightRadius: 10,
        marginLeft: 2
    }
}