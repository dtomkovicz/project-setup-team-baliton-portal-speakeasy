import './App.css';
import MainPage from './MainPage.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/easter">
          NOT IMPLEMENTED YET
        </Route>
        <Route path="/taglist">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/tag">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/recent">
          <Toplog />
          <MainPage />
          <Bottom />
        </Route>
        <Route path="/createcall">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/chatroom">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/about">
          <Toplog />
          NOT IMPLEMENTED YET
        </Route>
        <Route path="/">
          <Toplog />
          <MainPage />
          <Bottom />
        </Route>
      </Switch>
     </Router>
  );
}

export const Toplog = (props) => {
  return (
    <div id = "top">
      <div id = "nickname">
        <Textbox mess = "Nickname: " tag = "nickname" name = "confirm"> </Textbox>
      </div>
      <button position = "absolute" bottom = "0"  href = "/easterEggPage" id = "topper"> SpeakEasy </button>
    </div>
  );
}

function Link(prop) {
  return (
    <div align = {prop.ali}>
      <button variant = {prop.var} href = {prop.action} className = "buttons" id = {prop.id}>  {prop.name}
      </button>
    </div>
  );
}

function Textbox(prop) {
  return (
    <div align = {prop.ali}>
     <form action="/callPage">
       <label form="tag"><b>{prop.mess}</b></label>
       <input type="text" id={prop.tag} name = {prop.tag}/><br/><br/>
       <input type="submit" value= {prop.name} id = "submitcall"/>
     </form>
    </div>
  );
}

function Bottom() {
  return (
    <div id = "bottom">
      <Link ali = "center" var = "primary" action = "/about" name = "About us" id = 'au'> </Link>
      <h2> All right reserved 2021 </h2>
    </div>
  );
}

export default App;
export {Link , Textbox};