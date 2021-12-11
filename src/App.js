import './App.css';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"
import Login from '../src/components/screens/Login'
import Dashboard from './components/screens/Dashboard';

function App() {
  return (
  
     <Router>
     <>
     <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/Dashboard" component={Dashboard} />
     </Switch>
     </>
   </Router>
  );
}

export default App;
