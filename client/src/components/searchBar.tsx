import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar(){
    return (
        <div style={style.container}>
            <FontAwesomeIcon icon={faSearch} color={'#666360'} style={style.icon}/>
            <input id='search-input' style={style.input}/>
        </div>
    )
}

const style: { [key: string]: React.CSSProperties; } = {
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#28262e',
        alignItems: 'center',
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        marginRight: 40,
    },
    input: {
        flex: 1,
        height: '100%',
        border: 'none',
        backgroundColor: '#28262e',
        color: 'white'
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }
}