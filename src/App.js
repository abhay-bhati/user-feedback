import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './layout/Navbar';
import Questionnaire from './components/Questionnaire';
import TablePage from './pages/TablePage';

function App() {

  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/ques'>
            <Questionnaire />
          </Route>
          <Route path='/table'>
            <TablePage />
          </Route>
        </Switch>
    </Router>
  )
};


export default App;
