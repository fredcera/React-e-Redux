import React, { cloneElement } from 'react'

export default props => {
    // console.log(typeof props.children.map)
    // '...' = spred, serve para passar atributos do objeto 'props' do componente pai para o filho
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            }
            {/* <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome}/> */}
            {/* <FamiliaMembro nome='Ana' {...props}/> /*utilizando spred aqui */}
            {/* <FamiliaMembro nome='Carlos' sobrenome='Silva'/> */}
            {/*cloneElement(props.children, { ...props })/*} {/* o segundo parametro é opcional e 
            pode ser passado como props */}

            {/* uma forma de fazer é assim  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< como abaixo
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            */}

            {/* {props.children} */}
        </div>
    )
}