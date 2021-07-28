import React from 'react' //importa os elementos JSX

export default function ComParametro(props){
    console.log(props)
    const sub = props.subtitulo
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'//parametro com relação ternaria (if intrinseco)
    //props.nota = Math.ceil(props.nota) assim trava a aplicação pq é uma propriedade APENAS DE LEITURA
    const notaInt  = Math.ceil(props.nota) //isso converte o valor para cima (arrenda o float pra cima)
    //não tem como alterar diretamente propriedades somente leitura apenas usalas como estão
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{sub}</h3>
            <p>
                <strong>{props.aluno} </strong> 
                tem nota 
                <strong> {notaInt} </strong>
                e foi
                <strong> {status}</strong>!
            </p>
        </div>
        //deve ser usado as {} pois é identificado como um valor dentro do parametro como componente
        //sem isso não sera mostrado o valor do 'params'
    )
}