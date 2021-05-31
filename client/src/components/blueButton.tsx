import React from 'react'

export interface IBlueButtonProps{
    text: string,
    onClick: () => void
}

export default function BlueButton(props: IBlueButtonProps){
    return (
        <div>
            <button style={style.button} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    button: {
        height: 37,
        width: 140,
        border: 'none',
        borderRadius: 7,
        backgroundColor: '#2039cc',
        color: '#cccccc',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
}