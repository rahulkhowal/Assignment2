import React ,{Component} from 'react';
import Login from  './component/Login'
import { Switch,Route,BrowserRouter} from 'react-router-dom'
import Dashboard from './component/Dashboard'
//import axios from 'axios';
import Logout from './component/Logout'
import Navbar from './component/Navbar'

class App extends Component{
  

 render(){
    return (
     <div>
     <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/Dashboard' component={Dashboard}/>
            <Route exact path='/Logout' component={Logout}/>
          </Switch>
      </BrowserRouter>  
     </div>
  );
}
}

export default App; 
