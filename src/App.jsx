
import './App.css'

function Saludo(){
  return <h2>Hola, Bienvenido a mi aplicación React!</h2>
}

function App() {

  return (
    <>
    <img src="src/assets/luffyg5.jpg" className="logo"></img>
      <h1>Welcome to My React App</h1>
      <Saludo></Saludo>
      <h1>Todo funcionando Ok</h1>
      <p>Nada preocupante xD</p>
    </>
  )
}

export default App
