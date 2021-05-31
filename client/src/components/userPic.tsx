import React from 'react'

export interface IUserPicProps{
    imageURL: string
}

export default function UserPic(props: IUserPicProps){
    return (
        <div style={style.container}>
            <img style={style.imagem} alt={'no pic'} src={props.imageURL}/>
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    container: {
        display: 'flex',
        height: 50,
        width: 50,
        border: 'solid 3px',
        borderColor: '#cccccc',
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        height: '110%',
        borderRadius: 25,
        backgroundColor: 'white'
    }
}