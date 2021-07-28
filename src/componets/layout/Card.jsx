import React from 'react'
import "./Card.css"
export default props => { //aqui temos a definição de como a tag Card ira funcionar
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
        //className é uma forma apontar para Card que esta dentro do .css 
        //q assim recebe as definições de estilo de dentro do .css

        //titulo entra como um atributo normal pra dentro do props
        //agora o children vem do componente passado dentro de Card
    )
}