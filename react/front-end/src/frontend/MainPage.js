import './App.css';
import './MainPage.css';
import {Linker, Textbox} from './App.js';


const MainPage = (prop) => {                 //need  user name
  return (
    <div id="mainDiv">
      <div id="side">
        <br></br>
        <h1 align = "left"> {prop.name} </h1>
        <Linker ali = "left" var = "primary" action = "/taglist" name = "Explore Tags" cn="sidebar"> </Linker>
        <Linker ali = "left" var = "primary" action = "/recent" name = "Recent Calls" cn="sidebar"> </Linker>
        <br></br>
      </div>
      <Textbox ali = "center" mess = "Call ID: " action = "/chatroom" tag = "id" name = "Join Call by Call ID" cn="callNameField"> </Textbox>
      <Linker ali = "center" var = "primary" action = "/chatroom?id=" name = "Create New Call" cn = "buttons"> </Linker>
      <Linker ali = "center" var = "primary" action = "/chatroom" name = "I am feeling lucky!" cn = "buttons"> </Linker>
      <br></br>
      <br></br>
    </div>
  );
}

export default MainPage;
