import { useState } from 'react'
import './App.css'

function App() {
  // Estado: guarda o que o usuário digita
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  // Função chamada quando o formulário é enviado
  function handleSubmit(evento) {
    evento.preventDefault() // impede a página de recarregar

    if (email === '' || senha === '') {
      setMensagem('Preencha todos os campos.')
      return
    }

    setMensagem('Login feito com sucesso! Bem-vinda, ' + email)
  }

 return (
  <div className="container">
    <h1 className="titulo">Login</h1>

    <form className="card" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Entrar</button>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </form>
  </div>
)
}

export default App