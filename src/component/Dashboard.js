import React,{Component} from 'react'
//import OpeningHours from './Dashboard/OpeningHours'
//import { Switch,Route,BrowserRouter} from 'react-router-dom'
//import { Link, NavLink, withRouter } from 'react-router-dom'
//import axios from 'axios'
//import Button from '@material-ui/core/Button';
//import Cookies from 'universal-cookie';
//const cookies = new Cookies();
class Dashboard extends Component{
 state={
 	data:''
 }
 //let List=this.state.data.map(curr=>{
		//return(
                //<div className="list container" keys=(curr.id)>
                 //<span>Day:{curr.weekday}</span>
                //</div>
			//)
	//})
componentWillMount =async()=>{
	
    const api_call = await fetch('https://www.getpostman.com/collections/aaedf5d90a04b24a2e7b');
        const response = await api_call.json(); 
        console.log(response.requests[0].responses)
        this.setState({
        	data:response.requests[0].responses[0].text
        })
        console.log(this.state.data)
        console.log(response.requests[0].responses[0].text)
	}

	
	render(){
		//const {lists}= this.state.data
		const { lists }=this.state.data.length ? (this.state.data.map(curr=>{
			   return(     
                       <div>
                        <span>day:{curr.weekday}</span>
                        <span>OpeningHours:{curr.from_hour}</span>
                        <span>ClosingHour:{curr.to_hour}</span>
                        </div>
			     	)  

		})
		) : (<h1>no data</h1>)*/
		return(		
			 <div className="list collection">{lists}</div>
		);
	};
}
export default Dashboard