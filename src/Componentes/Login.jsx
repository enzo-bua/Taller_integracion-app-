import React from "react";
import '../Styles/Login.css'

const Login = () => {
    return ( 
        
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">
                        Bienvenido
                    </div>
                    <div class="ing">
                        Por favor, ingrese su cuenta
                    </div>
                    <form id="loginform">
                        <input className="tit" type="text" name="usuario" placeholder="Usuario" required/>
                        
                        <input type="password" placeholder="Contraseña" name="password" required/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    <div class="pie-form">
                        <a href="#">¿Perdiste tu contraseña?</a>
                        <a href="#">¿No tienes Cuenta? Registrate</a>
                    </div>
                </div>
                <div class="inferior">
                    <a href="#">Volver</a>
                </div>
            </div>
        </div>
            
        
     );
}
 
export default Login;