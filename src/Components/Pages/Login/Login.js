import React from 'react';
import './styles.css';
import FormLogin from './formLogin';
export default class Login extends React.Component{

    handleSubmit = e =>{
        e.preventDefault();
        console.log("Subiendo");
    }

    
    render(){
        return(
            <div className="form__container">
                <div className="form__container-content">
                    <FormLogin
                        onSubmit={this.handleSubmit}
                      />
                </div>
            </div>
        )
    }
}