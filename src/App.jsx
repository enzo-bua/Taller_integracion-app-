import React from 'react'
import './App.css'
import './Styles/Template.css'
import logo from './img/libro.png'
import Buscador from './Componentes/Buscador'
import Checkin from './Componentes/Checkin'
import Header from './Componentes/Header'
import Login from './Componentes/Login'
import Template from './Componentes/Template'
import ResetPassword from './Componentes/ResetPassword'

function App() {

  return (
    <div className="App ">
       <Header /> 
       <Buscador /> 


       <div className='c container mt-1'>
      <div className='c d-flex flex-row '>
        <div className='p-2'>
        <Template
        name='MI LIBRO'
        img={logo}
        descripcion='libro de ciencia ficcion del auto bua enzo'
        precio = '$6000.00'
        cuotas='3 coutas sin interes'
      />
        </div>
        <div className='p-2'>
          <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
        </div>
        <div className='p-2'>
          <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
        </div>

        <div className='p-2'>
          <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
        </div> 
      
      </div>
      
      
    </div>
    <div className='container mt-0'>
      <div className='d-flex flex-row '>
        <div className='p-2'>
        <Template
        name='MI LIBRO'
        img={logo}
        descripcion='libro de ciencia ficcion del auto bua enzo'
        precio = '$6000.00'
        cuotas='3 coutas sin interes'
      />
        </div>
        <div className='p-2'>
          <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
        </div>
        <div className='p-2'>
          <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
        </div>

        <div className='p-2'>
          <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
        </div> 
      
      </div>
      
      
    </div> 
    </div>
  )
}

export default App
