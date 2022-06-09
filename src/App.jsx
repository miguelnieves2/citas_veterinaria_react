import { useState, useEffect } from 'react'
import { Formulario } from './components/Formulario'
import Header from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'


function App() {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

   
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])
 

  // useEffect(() =>{
  //   const obtenerLS = () =>{
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   }

  //   obtenerLS();
  // }, []) // Arreglo vacio quiere decir que se ejecute una sola vez cuando el componente esta listo

  // useEffect(() => {
  //   localStorage.setItem('pacientes', JSON.stringify(pacientes))
  // }, [pacientes])
  

  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className='mx-5 mt-12 md:flex'>
        <Formulario 
          pacientes = {pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
