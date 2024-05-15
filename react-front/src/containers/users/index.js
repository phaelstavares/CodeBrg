import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

import H1 from "../../components/title"
import ContainerButton from "../../components/Button"
import { Container, Imagem, User } from "./styles"

import Avatar from "../../assets/cadastro-banner.png"
import Lixeira from "../../assets/lixeira-icone.png"

// JSX
export default function Users ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  // React Hooks -> useEffect (efeito colateral)
  // A minha aplicação inicia (A página carregou, useEffect é chamado)
  // Quando um estado que está no array de dependência do useEffect é alterado

  async function excluirUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const NovoUsers = users.filter(user => user.id !== userId)
    
    setUsers(NovoUsers)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Imagem alt="logo imagem" src={Avatar}/>
          <H1>Usuários</H1>

          <ul>
            { users.map(user => (
              <User key={user.id}>

              <p>{user.name}</p> <p>{user.age}</p>

              <button onClick={() => excluirUser(user.id)}>
                <img src={Lixeira} alt="lixeira"/>
              </button>
              </User>
            ))
            }
          </ul>

          <ContainerButton isBack={true} onClick={goBackPage} to="/">Voltar</ContainerButton>
    </Container>
  )
}