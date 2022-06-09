import {React} from 'react'
import Paciente from './Paciente'


export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  console.log('ListadoPacientes', pacientes);

  return (
    <div className='md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll'>

        { pacientes && pacientes.length 
          ? (
            <>
              <h2 className='font-black text-2xl text-center'>Listado pacientes</h2>

              <p className='text-lg mt-2 text-center mb-5'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>pacientes y citas</span>
              </p>
      
              {pacientes.map( paciente => (
                <Paciente 
                key={paciente.id} 
                paciente={paciente} 
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
              ))}
            </>
          )
          :(
            <>
              <h2 className='font-black text-2xl text-center'>No hay pacientes</h2>

              <p className='text-lg mt-2 text-center mb-5'>
                Comienza agregando pacientes {''}
                <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
              </p>
            </>
          )
        }

        
    </div>
  )
}
