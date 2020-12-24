import isEmpty from 'validator/lib/isEmpty';
import typesName from '../Helpers/typesName';
import errorMessage from '../Helpers/errorMessage';
import errorName from '../Helpers/errorrName';

export default class ValidationLogin{
    constructor(tipoValidation){
        this.result = {
            status:typesName.Ok,
            message:typesName.success
        }
        this.tipoValidation = tipoValidation;

        this.isValid = (info) => {
            switch(this.tipoValidation){
                case typesName.typeLogin:
                    this.validarLogin(info);
                    break;
                case typesName.typeRegistro:
                    //ValidarRegistro
                    break;
                default:
                    break;
            }
        };
        this.validarLogin = (info) => {
           
            let isEmptyPass = isEmpty(info.password);
            let isEmptyEmail = isEmpty(info.email);

            if(isEmptyEmail){
                this.result.status = errorName.EmptyEmail;
                this.result.message = errorMessage.errorEmptyEmail;
            }else if(isEmptyPass){
                this.result.status = errorName.EmptyPassword;
                this.result.message = errorMessage.errorEmptyPassword;
            }
        }
    }
}