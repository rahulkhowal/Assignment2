import React,{Component} from 'react'
import axios from 'axios'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import '../App.css'
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom'
//import Dashboard from './Dashboard'
const cookies = new Cookies();

class Login extends  Component{
	constructor(props){
     super(props)
     this.state={
     	email:'',
		password:''
     }
	}
	
	handleSubmit=(e)=>{
     e.preventDefault()
     //console.log("Ihi")
     const Login={
       username:this.state.email || ' ',
       password: this.state.password || ''
      }
   
     console.log("Login", Login);
       axios.post('http://testapi.halanx.com/rest-auth/login/', {...Login}) 
    
      .then(res => {
        console.log(res);
        console.log(res.data); 
        axios.defaults.headers.common['Authorization'] =res.data;
        cookies.set('loggedIn', res.data, {path:'/'})
        this.props.history.push('Dashboard')
      })
      
      .catch(error =>  {
         console.log(error);
      })
     
  }

  	
    render(){
	   return(
	   	<div className="Container">
          <form className="item-container" onSubmit={this.handleSubmit}>
            <TextField
             id="standard-name"
              label="Email"
               type="text"
               name="email"
               autoComplete="email"
               margin="normal"
               value={this.state.email}
               onChange={(event)=>this.setState({email:event.target.value})}
             />
             
            <br/>
            <TextField
              id="standard-password"   
              label="password"
              type="password"
              name="password"
              autoComplete="password"
               margin="normal"
               value={this.state.password}
               onChange={(event)=>this.setState({password:event.target.value})}
             />
            <Button variant="outlined" color="primary" type='submit' onClick={this.handleSubmit} >
               Login
            </Button>
          </form>
          {
          	(cookies.get('loggedIn')!==null && cookies.get('loggedIn')!== undefined && cookies.get('loggedIn')!== "" ?
               <Redirect to="/Dashboard"/> : null
          	 )
  	
  		}

          
          </div>
		 )
    
    }
}
export default Login