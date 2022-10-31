import React from 'react'
import '../Styles/TemplateCompra.css'
import imagen from '../img/libro.png'
import Rating from '@mui/material/Rating';
import {TfiComments} from 'react-icons/fi'

const TemplateCompra = (props) => {
  return (
    <div>
      <div className='card-cont'>
          <div className="card-c">
            <img className='img' src={imagen} alt="" />
          </div>
          <div className='data-c'>
              <p className='name'> <strong> {props.name}</strong> </p>
              <Rating className='est' name="size-large" defaultValue={2} size="large" />
              <p className='precio'> {props.precio} </p>
              <p className='cuotas'> {props.cuotas} </p>
              <a className='pago' href="">Ver formas de pago</a>            

            <form className='form'>
              <input className='inp' type="text" placeholder='Codigo Postal' />
              <button className='env'>Calcular</button>
            </form>
            
            <p className='stock'>Stock disponible</p>
            <p className='cantidad'><b>CANTIDAD</b></p>
            <input className='cantidad-inp' type="number"min="0" max="100"></input>
            <form>
              <button className='but-com btn btn-custom-color' type="submit" title="Ingresar" name="Ingresar">Comprar ahora</button>
              <button className='but-agr btn btn-custom-color' type="submit" title="Ingresar" name="Ingresar">Agregar a carrito</button> 
            </form>
          </div>  
        </div>

        <div className='caracteristicas'>
          <h1>Caracteristicas</h1>
          <p>Lorasdasdasdibasd asl</p>
        </div>

        <div className='comentarios'>
          <h2>Comentarios</h2>
        
          <input type="textarea"/>
          <form className='botones'>
            <button className='btn btn-custom-color'>Enviar</button>
            <button className='btn btn-custom-color'>Cancelar</button>
          </form>
        </div>


    </div>
  )
}

export default TemplateCompra