import React from 'react';
import './styles.css';
import FormLogin from './formLogin';
import validation from '../../../Validation/validation';
import typesName from '../../../Helpers/typesName';
import { ToastContainer, toast } from 'react-toastify';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.toast_config = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    }
    getElementValue = (idElement) =>{
        return document.getElementById(idElement).value;
    }

    handleSubmit = async e =>{
        e.preventDefault();
        let validation_login = new validation(typesName.typeLogin);
        
        validation_login.isValid({ 
            password: this.getElementValue(typesName.password),
            email: this.getElementValue(typesName.email)
        }) ;

        let result = validation_login.result;

        if(result.status === typesName.Ok)
            toast.success('🦄 Bien Validado!', this.toast_config );
        else
            toast.error(`Uhh Algo Pasó ! ${result.message} ¡`,this.toast_config);
        
        
       

    }

    
    render(){
        return(
            <div className="form__container">
                <div className="form__container-content">
                    <FormLogin
                        onSubmit={this.handleSubmit}/>
                      <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>
                </div>
            </div>
        )
    }
}