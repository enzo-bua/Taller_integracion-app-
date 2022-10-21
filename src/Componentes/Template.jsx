import React from 'react';
import '../Styles/Template.css'
const Template = (props) => {
    return ( 
        <div className='container'>
            <div className='card'>
                <img
                    className='img' 
                    src={props.img}
                    alt="" 
                />
                <div className='data'>
                    <p className='name'> <strong> {props.name}</strong> </p>
                    <p className='descripcion'>{props.descripcion}  </p>
                    <p className='precio'> {props.precio} </p>
                    <p className='cuotas'> {props.cuotas} </p>
                    <button className='btn btn-custom-color'>COMPRAR</button>
                </div>

            </div>

        </div>            
    );
}
 
export default Template;