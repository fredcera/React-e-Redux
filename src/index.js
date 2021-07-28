import './index.css'
import ReactDOM from 'react-dom'
import React from 'react' //deve ser usada quando usar JSX

// import Primeiro from './componets/basicos/Primeiro' //não é necessario colocar .js no final pois ele entende
//Para chamar essa tag basta usar <Primeiro>

// import ComParamtro from './componets/basicos/ComParametro'

// import Fragmento from './componets/basicos/Fragmento'

// OS IMPORTS ANTERIORES FORAM MOVIDOS PARENDTRO DE APP.JSX

import App from './App'


//const elemento = document.getElementById('root')
//ReactDOM.render('Olá react!',elemento)

//outra forma de fazer é a seguinte

//const tag = <h1>Usando a forma de declaração interna!</h1>
// essa declaração assima pode ser usada como declaração usando JSX

ReactDOM.render(
    //<div> -> movida para dentro de App.jsx <<<---
    // <div id="app">
    //     <Primeiro></Primeiro> 
    //     <ComParamtro 
    //         titulo="Segundo Componente"
    //         subtitulo="Muito legal!" 
    //         aluno="Pedro"
    //         nota ={9.3}/>
    //     <ComParamtro 
    //         titulo="Repetição do Componente"
    //         subtitulo="Muito toperson!" 
    //         aluno="Bernardo"
    //         nota ={6.5}/>
    //         <Fragmento/>
    // </div>, //a tag <div> faz a função das aspas ('')
    //  <<<---
    // a tag <strong> deixa o texto em negrito
    //a tag tem que ser pelo menos fechada com /> caso tenha seus parametros definidos dentro da tag

    <App />,
    document.getElementById('root')
)