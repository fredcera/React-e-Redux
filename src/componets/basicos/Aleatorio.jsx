import React from 'react'

//usando metodo destructuring para fazer a parte inter na da função, passandos os valores de props
// para variaveis que são declaradas dentro da função como const
export default props => {
    // const min = props.min
    // const max = props.max

    //formas do destructuring
    const [a, b] = [1, 2]
    const { c, d, x, y } = { c: 12, d: 49, x: 'teste' }

    const { min, max } = props //metodo destructuring, aonde passa automaticamente os valores

    const texto = 'const {c, d, x, y} = { c: 12, d: 49, x: teste}'


    const resultado = parseInt(Math.random() * (max - min) + min)
    return (
        < div >
            < h2 >Valor Aleatório </h2 >
            <p><strong>Valor mínimo: </strong> {min} </p>
            <p><strong>Valor máximo: </strong> {max} </p>
            <p><strong>Valor escolhido: </strong> {resultado}</p>
            <p><strong>Exemplo de valores passados para variaveis com destructuring abaixo:</strong></p>
            <p><strong>A declaração foi: const [a, b] = [1, 2]</strong></p>
            <p><strong>a = </strong> {a}</p>
            <p><strong>b = </strong> {b}</p>
            <p><strong>A declaração a seguir é diferente, mas tem o mesmo fim, observer abaixo a declaração:</strong></p>
            <p><strong> {texto}</strong></p>
            <p><strong>Aonde as saidas de cada variavel é:</strong></p>
            <p><strong>c = </strong> {c}</p>
            <p><strong>d = </strong>{d}</p>
            <p><strong>x = </strong>{x}</p>
            <p><strong>y = </strong>{y}</p>

        </div >
    )
}

