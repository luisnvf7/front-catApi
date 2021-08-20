import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import CatPage from './pages/CatPage'
import Home from './pages/Home'
import CriteriosPage from './pages/Criterios';
import PrivateRoute from './guard/GuardRoute';
import { FC } from 'react'


const App : FC = () => {

  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={Home} />
        <PrivateRoute path="/cat" component={CatPage} exact={false} />
        <PrivateRoute path="/criterio" component={CriteriosPage} exact={false}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
