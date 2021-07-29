import React from 'react'
import "./Card.css"

export default props => { //aqui temos a definição de como a tag Card ira funcionar

    //Utilizando os mesmos parametros css tirando-se o hifem e colocando
    //a proxima palavra com letra maiuscula o resultado entra como css.
    //O objeto abaixo é passado apos ser montado com os argumentos passados no App.jsx
    //para cada Card
    const cardStyle = {
        
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        // <div className="Card" style={{backgroundColor: props.color || '#F00',
        // borderColor: props.color || '#F00'}}>
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
        //className é uma forma apontar para Card que esta dentro do .css 
        //q assim recebe as definições de estilo de dentro do .css

        //titulo entra como um atributo normal pra dentro do props
        //agora o children vem do componente passado dentro de Card
    )
}