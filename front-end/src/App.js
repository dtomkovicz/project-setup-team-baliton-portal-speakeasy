import './App.css';
import MainPage from './MainPage';
import About from './About'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Chatroom from './Chatroom'
import TagList from './TagList'
import TagPage from './TagPage'
import EasterEgg from './EasterEgg'
//import CreateNewCall from './CreateNewCall'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/taglist">
          <Toplog />
            <TagListWithTags />
          <Bottom />
        </Route>
        <Route path="/tagpage">
          <Toplog />
            <TagPageWithCalls />
          <Bottom />
        </Route>
        <Route path="/recent">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/createcall">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/chatroom">
          <Toplog />
          <Chatroom/>
          <Bottom />
        </Route>
        <Route path="/about">
          <Toplog />
          <About />
        </Route>
        <Route path="/main">
          <Toplog />
          <MainPage />
          <Bottom />
        </Route>
        <Route path="/">
          <EasterEgg/>
        </Route>
      </Switch>
     </Router>
  );
}

function Linker(prop) {
  return (
    <div align = {prop.ali}>
      <Link to = {prop.action}>
         <button variant = {prop.var} className = "buttons" id = {prop.id}>  {prop.name}
         </button>
      </Link>
    </div>
  );
}


const Toplog = (props) => {
  return (
    <div id = "top">
      <div id = "nickname">
        <Textbox mess = "Nickname: " tag = "nickname" name = "confirm"> </Textbox>
      </div>
      <Linker ali = "left" var = "primary" action = "/main" name = "Speakeasy" id = 'au'></Linker>

    </div>
  );
}



function Textbox(prop) {
  return (
    <div align = {prop.ali}>
     <form action="/chatroom">
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
      <Linker ali = "center" var = "primary" action = "/about" name = "About us" id = 'au'> </Linker>
      <h2> All right reserved 2021 </h2>
    </div>
  );
}

const TagListWithTags = () => {
  const tags = [
    {
      'tagName': 'TAG NAME 1',
      'link': 'tagpage',
      'numPeople': 123,
      'numCalls': 456
    },
    {
      'tagName': 'TAG NAME 2',
      'link': 'tagpage',
      'numPeople': 987,
      'numCalls': 34
    },
    {
      'tagName': 'TAG NAME 3',
      'link': 'tagpage',
      'numPeople': 9867,
      'numCalls': 324
    },
    {
      'tagName': 'TAG NAME 4',
      'link': 'tagpage',
      'numPeople': 28,
      'numCalls': 35
    }
  ]
  return <TagList tags={tags} />
}

const TagPageWithCalls = () => {
  const calls = [
    {
      'callName': 'CALL NAME 1',
      'link': 'chatroom',
      'numPeople': 536,
      'duration': 9.1
    },
    {
      'callName': 'CALL NAME 2',
      'link': 'chatroom',
      'numPeople': 251,
      'duration': 548.2
    },
    {
      'callName': 'CALL NAME 3',
      'link': 'chatroom',
      'numPeople': 941,
      'duration': 32.7
    },
    {
      'callName': 'CALL NAME 4',
      'link': 'chatroom',
      'numPeople': 151,
      'duration': 43.2
    }
  ]
  return <TagPage calls={calls} />
}


export default App;
export {Linker , Textbox, Toplog, Bottom};
