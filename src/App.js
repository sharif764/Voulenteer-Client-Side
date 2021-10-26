import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Donation from './Components/Donation/Donation';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/home/:key">

          </Route>
          <Route path="*">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
