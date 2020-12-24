import React from 'react';
import {Redirect} from 'react-router-dom';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged : localStorage.getItem('isLogged')
        }
    }
    render(){
        if(this.state.isLogged === "false"){
            return(
                <Redirect to="/"/>
            )
        }

        return(
            <h1>Home</h1>
        )
    }
}