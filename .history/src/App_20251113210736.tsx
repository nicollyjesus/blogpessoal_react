import './App.css'
import Contador from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

 
function App() {
 
  return (
    <>
      { 
        < Home
          titulo="Título da Postagem"
          texto="Texto da Postagem."
           />}
 
      {<Contador />}

      {<Tarefa />}

      {<Login />}
 
    </>
  )
}
 
export default App
 
 