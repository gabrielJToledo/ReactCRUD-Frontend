import React from 'react'
import './Form.css'

import rede from '../../assets/rede.png'

function Form() {
  return (
    <main className="card_container">
        <div className="user_content">

        </div>

        <div className="form_content">
            <img src={rede} alt="rede" />

            <h2>Insira seu cliente!</h2>

            <input type="text" placeholder='Digite o nome...' />

            <input type="text" placeholder='Digite o e-mail...' />

            <input type="text" placeholder='Digite o telefone...' />
        </div>
    </main>
  )
}

export default Form