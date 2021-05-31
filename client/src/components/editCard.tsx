import React from 'react'
import { IDBItem } from '../services/serverApi'
import BlueButton from './blueButton'

export interface IEditCardProps{
    currentEditing?: IDBItem | undefined,
    confirmEdit: () => void,
    cancelEdit: () => void
}

export const inputId = {
    nome: 'editor-input-nome',
    preco: 'editor-input-preco',
    imagem: 'editor-input-imagem'
}

export default function EditCard(props: IEditCardProps){
    return (
        <div style={style.container}>
            <div>
                <div style={style.propertyContainer}>
                    <h1 style={style.propertyText}>Nome:</h1>
                    <input id={inputId.nome} style={style.input} placeholder={props.currentEditing?.nome}/>
                </div>

                <div style={style.propertyContainer}>
                    <h1 style={style.propertyText}>Preço:</h1>
                    <input id={inputId.preco} style={style.input} placeholder={props.currentEditing?.preco.toString()}/>
                </div>

                <div style={style.propertyContainer}>
                    <h1 style={style.propertyText}>Imagem:</h1>
                    <input id={inputId.imagem} style={style.input} placeholder={props.currentEditing?.imagem}/>
                </div>
            </div>
            <div style={style.buttonsContainer}>
                <BlueButton onClick={props.confirmEdit} text="Ok"/>
                <BlueButton onClick={props.cancelEdit} text="Cancel"/>
            </div>
            
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        position: 'fixed',
        height: 300,
        width: 300,
        top: '50%',
        left: '50%',
        marginTop: '-170px',
        marginLeft: '-170px',
        backgroundColor: '#111111',
        zIndex: 1,
        padding: 20
    },
    propertyContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
        
    },
    propertyText: {
        color: '#cccccc',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 20,
        marginRight: 20,
        width: 80
    },
    input: {
        height: 30,
        border: 'none',
        backgroundColor: '#28262e',
        color: 'white',
        borderRadius: 7,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    }
}
