import React from 'react';
import './styles.css';
import FormLogin from './formLogin';
import validation from '../../../Validation/validation';
import typesName from '../../../Helpers/typesName';
import { ToastContainer, toast } from 'react-toastify';
import authFirebase from '../../../Api/authFirebase';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.authFirebase = new authFirebase();
        this.toast_config = {
            position: "bottom-center",
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

    handleSubmit = e =>{
        e.preventDefault();
        let validation_login = new validation(typesName.typeLogin);
        
        let info = { 
            password: this.getElementValue(typesName.password),
            email: this.getElementValue(typesName.email)
        }
        validation_login.isValid(info) ;

        let result = validation_login.result;

        this.showResult(result,info);


    }

    showResult = async (result,info) =>{
        if(result.status === typesName.Ok){
            await this.authFirebase.signIn(info);
            if(this.authFirebase.result.status === typesName.Ok){
                toast.success("Bien Logueado !",this.toast_config);
            }else{
                toast.error(`Uhh Algo Pasó ! ${this.authFirebase.result.message} ¡`,this.toast_config);
            }
        }else
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