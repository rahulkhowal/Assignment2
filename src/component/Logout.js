import React ,{Component} from 'react'
import axios from 'axios'
//import Login from './Login'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Logout extends Component{
	componentDidMount=()=>{
	 axios.post('http://testapi.halanx.com/rest-auth/logout/')   
    .then(response => {
      axios.defaults.headers.common['Authorization'] = null;
      console.log(response)
      cookies.remove('loggedIn')
      this.props.history.push('/')
     })
     .catch(error =>  {
       console.log(error);
     })  
	}
	render(){
		return(
			<div></div>
			)
	}
} export default Logout
