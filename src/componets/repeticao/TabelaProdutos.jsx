import React from 'react'
import Produtos from '../../Data/Produtos'
import './TabelaProdutos.css'

export default props => {
    function getLinhas(){ //função para retornar os dados da tabela de produtos
        return Produtos.map((produto, i) =>{ //protudo é a referencia de um produto da tabela, 
            //i é a referencia de uma class name (nesse caso usamos para definir linha Par ou Impar)
           
            return (
                //essa class name abaixo esta vinculada ao css para trocar a cor da linha para um cinza claro
                //quando for uma linha 'Par'

                // a tag <td> define um dado de tabela a entrar
                //usando .toFixed(2) garante que o numero decimal tenha apenas 2 casas depois da virgula

                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

    return(
            //a tag <table border="1"> serve para criar tabelas, e border="1" serve para aparecer as linhas
            //a tag <thead> serve para definir a linha de cabeçalho aonde consta o nome das colunas
            //a tag <tr> é a 'table rule' que define a regra da tabela
            //a tag <th> é o nome das colunas que devem estar na mesma sequencia de entrada de dados
            //a tag <tbody> é a entrada dos dados das colunas (nesse caso usamos uma função para entrada 
            //de dados)

        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}