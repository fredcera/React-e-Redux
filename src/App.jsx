import './App.css'
import React from 'react'

import Primeiro from './componets/basicos/Primeiro'
import ComParamtro from './componets/basicos/ComParametro'
import Fragmento from './componets/basicos/Fragmento'
import Aleatorio from './componets/basicos/Aleatorio'
import Card from './componets/layout/Card'
import Familia from './componets/basicos/Familia'
import FamiliaMembro from './componets/basicos/FamiliaMembro'
import ListaAlunos from './componets/repeticao/ListaAlunos'
import TabelaProdutos from './componets/repeticao/TabelaProdutos'
import ParOuImpar from './componets/condicional/ParOuImpar'

export default _ =>   //somente usando 'export default' pode ser usado uma função anonima
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            
            <Card titulo="#08 - Par ou Impar" color='#982395'>
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color='#3A9AD9'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color='#FF4C65'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color='#00C8F8'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='Pedro'/>
                    <FamiliaMembro nome='Ana'/>
                    <FamiliaMembro nome='Carlos'/> 
                </Familia>
            </Card>
        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
            <Aleatorio min={1} max={100} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color="#E8B71A">
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

        <Card titulo="#01 - Primeiro Component" color="#588C73">
            <Primeiro></Primeiro>
        </Card>
    </div>
    </div >

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




