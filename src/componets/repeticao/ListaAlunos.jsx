import React from 'react'
import Alunos from '../../Data/Alunos' //../ serve para voltar uma pasta

export default props => {
    // console.log(Alunos)
    const li1 = (
        <li>
            {Alunos[0].id}) {Alunos[0].nome} -> {Alunos[0].nota}
        </li>
    )

    const lis = Alunos.map(aluno => {
        // key é necessario nesse caso pois facilita para o react encontrar alterações de dados
        // para colocar na interface grafica
        return (
            <li key = {aluno.id}> 
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    });
    return (
        //style = {{listStyle: "none"}} representa uma lista sem marcação alguma de lista, apenas a lista e
        // em si
        <div>
            <ul style={{listStyle: "none"}}>
                {/* {li1} */}
                {lis}
                {/* <li>Carlos - 7.7</li> */}
                {/* <li>Daniel - 6.5</li> */}
            </ul>
        </div>
    )
}