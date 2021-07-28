import React from 'react'

export default function Fragmento(props) {
    return (
        <>
            <h2>
                Fragmento
            </h2>
            <p>
                Cuidado com esse erro!
            </p>
        </>//se usar esa tag vazia que representa o React.Fragment, não é possivel usar atributos dentro da tag
        // para usar algum valor de props ou outra variavel dentro da tag, NECESSARIAMENTE deve ser colocado 
        //React.Fragment dentro da tag
    )
}