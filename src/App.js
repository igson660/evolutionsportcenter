import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeacherDetail from './Pages/TeacherDetail';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home';
import Plans from './Pages/Plans';
import Programs from './Pages/Programs';
import Shedules from './Pages/Shedules';
import ProgramsDetail from './Pages/ProgramsDetail';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/planos" component={ Plans }/>
      <Route exact path="/horarios" component={ Shedules }/>
      <Route exact path="/programas" component={ Programs }/>
      <Route exact path="/quem-somos" component={ AboutMe }/>
      <Route exact path="/quem-somos/:id" component={ TeacherDetail } />
      <Route exact path="/programas/:id" component={ ProgramsDetail } />
    </Switch>
  );
}
