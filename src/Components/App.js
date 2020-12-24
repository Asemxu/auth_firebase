
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../Shared/Layout';
function App() {
  return (
   <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Home" component={Home}/>
      </Switch>
    </Layout>
   </BrowserRouter>
  );
}

export default App;
