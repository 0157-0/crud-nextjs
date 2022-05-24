import { useEffect, useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

export default function Home() {


  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '1'),
    new Cliente('Carlos', 23, '1'),
    new Cliente('Pedro', 54, '1'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

function novoCliente() {
  setCliente(Cliente.vazio)
  setVisivel('form')
}

 function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
}
  
 
return (
    <div className={` 
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-blue-900
    text-white
    `}>

  <Layout titulo="Cadastro Simples">

    {visivel === 'tabela' ? (

<>
<div className="flex justify-end">
<Botao 
className="mb-4"
onClick={() => setVisivel('form')}>
  
  Novo Cliente
  </Botao>
</div>

<Tabela clientes={clientes} 
clienteSelecionado={clienteSelecionado}
clienteExcluido={clienteExcluido}/>
</>

    ) : <Formulario 
    cliente={cliente} 
    clienteMudou={salvarCliente}
    cancelado={() => setVisivel('tabela')}></Formulario> }

    
  


</Layout>

    </div>
  )
}
