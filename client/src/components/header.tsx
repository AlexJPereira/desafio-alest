import React from 'react'
import BlueButton from './blueButton'

export interface IHeaderProps{
    addGameFunction: () => void
}

export default function Header(props: IHeaderProps){

    return (
        <div style={style.container}>
            <h1 style={style.titleText}>Produtos CRUD</h1>
            <BlueButton onClick={props.addGameFunction} text="Adicionar"/>
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    container: {
        display: 'flex',
        position: 'fixed',
        backgroundColor: '#28262e',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        height: 70,
        width: 'calc(100% - 60px)'
    },
    titleText: {
        color: '#cccccc',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 25
    },
}

