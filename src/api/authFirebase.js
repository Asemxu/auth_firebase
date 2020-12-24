import appFirebase from './firebaseConfig';
import typesName from '../Helpers/typesName';
import errorName from '../Helpers/errorrName';
import errorMessage from '../Helpers/errorMessage';

export default class authFirebase{

    constructor(){
        this.result = {
            status:typesName.Ok,
            message:typesName.success
        }
        this.auth = appFirebase.auth();

        this.signIn = async (info) => {
            await this.auth.signInWithEmailAndPassword(info.email,info.password).then((user)=>{
                //Logueado
            }).catch((error) => {
                let errorCode = error.code;
                this.result.status = errorCode;
                switch(errorCode){
                    case errorName.authWrongPassword:
                        this.result.message = errorMessage.errorWrongPassword;
                        break;
                    case errorName.authUserNotFound:
                        this.result.message = errorMessage.errorDontFoundUser;
                        break;
                    default:
                        break;
                };
            });

        }

        this.onAuthChange = () =>{
            this.auth.onAuthStateChanged(async (user) => {
                if (user) {
                    let currentUser = {
                        uid: user.uid,
                        email: user.email
                    };
                    localStorage.setItem("isLogged","true");
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));

                } else {
                    localStorage.setItem("isLogged", "false");
                    // User is signed out
                    // ...
                }
            });
        }
    }
}


