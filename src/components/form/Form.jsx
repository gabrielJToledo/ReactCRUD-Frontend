import React, { useEffect, useState } from 'react'
import './Form.css'
import axios from 'axios'

import rede from '../../assets/rede.png'

function Form() {

  // UseStates
  const [users, setUsers] = useState()
  const [formName, setFormName] = useState()
  const [formEmail, setFormEmail] = useState()
  const [formTel, setFormTel] = useState()

  const setName = (e) => {
    setFormName({ name: e.currentTarget.value })
  }

  const setEmail = (e) => {
    setFormEmail({ email: e.currentTarget.value })
  }

  const setTel = (e) => {
    setFormTel({ tel: e.currentTarget.value })
  }

  const handleClickSubmit = () => {
    axios.post('http://localhost:4002', {
      name: formName.name,
      email: formEmail.email,
      tel: formTel.tel
    }).then(() => {
      console.log('Usuário enviado')
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleClickDelete = (id) => {
    console.log('Estou sendo executado!')

    axios.delete(`http://localhost:4002/${id}`).then(() => {
      console.log('Usuário deletado')
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })

  }


  // Pega os usuários do backend
  useEffect(() => {
    axios.get('http://localhost:4002/users').then((res) => {
      setUsers(res.data)
    })
  }, [])


  return (
    <main className="card_container">
      <div className="users_container">
        <h2>Gerencie seus Clientes</h2>

        <div className="users_content">
          {users != undefined && users.map((user, index) => {
            return <div key={index} className="user_card">
              <p>{user.name}</p>

              <div className="user_data">
                <p>Email: {user.email}</p>
                <p>Telefone: {user.tel}</p>
              </div>

              <div className="user_btn">
                <input type="submit" value="Atualizar" />
                <input type="submit" onClick={(e, userId = user._id) => { handleClickDelete(userId) }} value="Deletar" />
              </div>
            </div>
          })}


        </div>
      </div>

      <div className="form_content">
        <img src={rede} alt="rede" />

        <h2>Insira seu cliente!</h2>

        <form onSubmit={handleClickSubmit}>
          <input className='form_input' onChange={setName} type="text" placeholder='Digite o nome...' required/>

          <input className='form_input' onChange={setEmail} type="text" placeholder='Digite o e-mail...' required/>

          <input className='form_input' onChange={setTel} type="text" placeholder='Digite o telefone...' required/>

          <input className='form_inputSubmit' type="submit" value="Inserir Usuário" />
        </form>
      </div>
    </main>
  )
}

export default Form