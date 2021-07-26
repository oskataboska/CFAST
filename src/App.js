import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeHero from './components/HomeHero';
import Menu from './components/Menu';
import About from './components/About';
import Restaurants from './components/Restaurants';
import Contact from './components/Contact';
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import HomeAbout from './components/HomeAbout';
function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact >
            <HomeHero/>
            <HomeMenu/>
            <HomeAbout/>
          </Route>
          <Route component={Menu} path="/Menu"/>
          <Route component={About} path="/O-nas"/>
          <Route component={Restaurants} path="/Restauracje"/>
          <Route component={Contact} path="/Kontakt"/>
        </Switch>
    </BrowserRouter>  
  );
}

export default App;
