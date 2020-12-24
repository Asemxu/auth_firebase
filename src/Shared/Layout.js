import React from 'react';
import {Redirect} from 'react-router-dom';
import authFirebase from '../Api/authFirebase';
export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.i = 0;
        this.authFirebase = new authFirebase();
        this.authFirebase.onAuthChange();
        this.state ={
            isLogged : localStorage.getItem('isLogged')
        }
    }

    componentDidMount(){
        this.intervalId = setInterval(this.isLogged, 2000);
       
    }

    isLogged = () =>{
        if(this.state.isLogged === "false"){
            this.setState({isLogged:localStorage.getItem('isLogged')});
        }

    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        const validateLogged = () =>{
            if(this.state.isLogged === "true"){
                return(
                    <Redirect to="/Home" />
                )
            }
        }
        return(
            <React.Fragment>
                <h1>Layout</h1>
                {validateLogged()}
                {this.props.children}
            </React.Fragment>
        )
    }
}