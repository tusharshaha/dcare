import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import SeeDetails from './Components/SeeDetails/SeeDetails';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/service/:id'>
            <SeeDetails></SeeDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
