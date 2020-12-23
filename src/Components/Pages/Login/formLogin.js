import React from 'react';

export default class formLogin extends React.Component{   
    render(){
        return(
        <React.Fragment>
                <div className="header">
                    <h2>Iniciar Sesión</h2>
                </div>
                <div className="body">
                    <form onSubmit={this.props.onSubmit} className="form__login form"> 
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" autoComplete="username" className="form-control" id="email" name="email" placeholder="Ingrese su Correo" required/>
                            <small id="emailError" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" autoComplete="current-password" className="form-control" id="password" name="password" required placeholder="Ingrese su Contraseña"/>
                            <small id="passError" className="form-text text-muted"></small>
                        </div>
                        <input type="submit" className="btn btn-primary mb-4 w-100" value="Ingresar"/>
                    </form>
                </div>
        </React.Fragment>
        )
    }
}
