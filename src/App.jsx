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
import TemplateCompra from './Componentes/TemplateCompra'

function App() {

  return (
    <div className="App ">
       <Header /> 
       <Buscador /> 
       <TemplateCompra
         name='MI LIBRO'
         img={logo}
         descripcion='libro de ciencia ficcion del auto bua enzo'
         precio = '$6000.00'
         cuotas='3 coutas sin interes'
       />

       {/* <section className='book-container'>
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
       <Template
            name='MI LIBRO'
            img={logo}
            descripcion='libro de ciencia ficcion del auto bua enzo'
            precio = '$6000.00'
            cuotas='3 coutas sin interes'
        />
      </section> */}

    </div>
  )
}

export default App
