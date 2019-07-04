import React,{Component} from 'react'
//import OpeningHours from './Dashboard/OpeningHours'
//import { Switch,Route,BrowserRouter} from 'react-router-dom'
//import { Link, NavLink, withRouter } from 'react-router-dom'
//import axios from 'axios'
//import Button from '@material-ui/core/Button';
//import Cookies from 'universal-cookie';
//const cookies = new Cookies();
import NewsApp from './DashboardComponents/NewsAPI/NewsApi'
import './DashboardComponents/NewsAPI/style.css'
//import Button from '@material-ui/core/Button'
class Dashboard extends Component{	
render(){
		//const {lists}= this.state.data
		return(

              <div className="Dashboard">
              <NewsApp/>
              </div>
			);
  }
}
export default Dashboard