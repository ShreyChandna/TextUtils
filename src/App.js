
import React,{useState}  from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert= (message, type)=>{
    setAlert({
    msg : message,
    type : type
    });
    setTimeout(() => {
     setAlert(null); 
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {setMode('dark');
    document.body.style.background='#042743';
    showAlert("Dark Mode has been enabled","success");}
    else 
    {setMode('light')
    document.body.style.background='white';
    showAlert("Light Mode has been enabled","success");}
  }
  return (
    <>  {/* jsx fragment  */}
    <Router>
    <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className= "container my-3">
    <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
