import React, { useState } from 'react'

import serverApi from '../../services/serverApi'

export default function Home(){

    const [produtos, setProdutos] = useState('')

    serverApi.getProdutos().then(produtos => setProdutos(produtos.map(produto => produto.nome).toString()))

    return (
        <h1>{produtos}</h1>
    )
}
