//esse componente é da extenção .js (JavaScript)

import React from 'react'


//a tag <p> serve para colocar um paragrafo de texto
//usando {} podemos passar o valor de uma variavel diretamente
export default function Primeiro() { //export default serve para deixar o componente disponivel
    const msg = 'Seja bem vindo(a)!'
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p> {msg} </p>
        </div>
    )
}