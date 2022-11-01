import React from 'react'
import './Form.css'

import rede from '../../assets/rede.png'

function Form() {
  return (
    <main className="card_container">
        <div className="user_container">
            <h2>Gerencie seus Clientes</h2>

            <div className="user_content">
                
            </div>
        </div>

        <div className="form_content">
            <img src={rede} alt="rede" />

            <h2>Insira seu cliente!</h2>

            <input className='form_input' type="text" placeholder='Digite o nome...' />

            <input className='form_input' type="text" placeholder='Digite o e-mail...' />

            <input className='form_input' type="text" placeholder='Digite o telefone...' />

            <input className='form_inputSubmit' type="submit" value="Inserir Usuário" />
        </div>
    </main>
  )
}

export default Form