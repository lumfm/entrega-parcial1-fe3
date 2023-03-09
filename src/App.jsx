import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './components/Formulario'

function App() {

  const [nombre,setNombre] = useState('')
  const [pelicula,setPelicula] = useState('')

  function handleChangeNombre(e){
    const cleanNombre = e.target.value.trim();
    setNombre(cleanNombre)
  }

  function handleChangePelicula(e){
    setPelicula(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if (nombre.length > 3 && pelicula.length > 6){
      return(
        <>
        <div>`${nombre}`</div>
        <div>`${pelicula}`</div>
        console.log(nombre,pelicula)
        </>
      
    )} else{
      alert('Por favor chequea que la información sea sea correcta')
    }
  }

  return (
    <>
    <Formulario> 
      
      <label>
        Nombre<input type="text" name='Nombre' value={nombre} onChange={handleChangeNombre}/>
      </label>

      <label>
        Peli Favorita<input type="text" name='Pelicula Favorita' value={pelicula} onChange={handleChangePelicula}/>
      </label>

      <button type='submit' onClick={handleSubmit}>Enviar</button>
    </Formulario>
    </>
  )
}

export default App
