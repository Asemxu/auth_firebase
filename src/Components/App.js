
import {BrowserRouter , Switch , Redirect , Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
   <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/Home" component={Home}/>
      <Redirect from="*" to="/" />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
