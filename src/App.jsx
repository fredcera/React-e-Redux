import './App.css'
import React from 'react'

import Primeiro from './componets/basicos/Primeiro'
import ComParamtro from './componets/basicos/ComParametro'
import Fragmento from './componets/basicos/Fragmento'
import Aleatorio from './componets/basicos/Aleatorio'
import Card from './componets/layout/Card'

export default _ =>   //somente usando 'export default' pode ser usado uma função anonima
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro">
                <ComParamtro
                    titulo="Segundo Componente"
                    subtitulo="Muito legal!"
                    aluno="Pedro"
                    nota={9.3} />
                <ComParamtro
                    titulo="Repetição do Componente"
                    subtitulo="Muito toperson!"
                    aluno="Bernardo"
                    nota={6.5} />
            </Card>

            <Card titulo="#01 - Primeiro Component">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

//a implementação abaixo passou para a de cima como a forma mais reduzida de implementar a mesma coisa

// export default function App(props){
//     return(
//         <div id="app">
//             <h1>Fundamentos React</h1>
//             <Fragmento/>
//             <ComParamtro 
//                 titulo="Segundo Componente"
//                 subtitulo="Muito legal!" 
//                 aluno="Pedro"
//                 nota ={9.3}/>
//             <ComParamtro 
//                 titulo="Repetição do Componente"
//                 subtitulo="Muito toperson!" 
//                 aluno="Bernardo"
//                 nota ={6.5}/>
//             <Primeiro></Primeiro> 
//     </div>
//     );
// }




