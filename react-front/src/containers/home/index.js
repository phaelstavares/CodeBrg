import React, { useState, useRef } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

import H1 from "../../components/title"
import ContainerButton from "../../components/Button"
import { Container, Imagem, InputLabel, Input } from "./styles"

import Banner from "../../assets/burger-banner.png"

// JSX
export default function App ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])
  const inputNome = useRef()
  const inputIdade = useRef()
  const navigate = useNavigate()

  async function adicionarUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputNome.current.value, age: inputIdade.current.value, })
    
    setUsers([...users, newUser])
    // spread operator (...)

    navigate("/usuarios")
  }

  return (
    <Container>
      <Imagem alt="logo imagem" src={Banner}/>
          <H1>Faça seu pedido!</H1>

          <InputLabel>Pedido</InputLabel>
          <Input ref={inputNome} placeholder="Pedido"></Input>

          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputIdade} placeholder="Nome do Cliente"></Input>

          <ContainerButton to="/usuarios" onClick={adicionarUser}>Novo pedido</ContainerButton>
    </Container>
  )
}