
import { colors, makeStyles } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
 import Tokenpage from './pages/Tokenpage';


function App() {


  const useStyles = makeStyles( () =>({
    App: {
      backgroundColor: '#FDFFFF',
      color: "#20A4F3",
      minHeight:'100vh'
    }
  }));


  const classes = useStyles()
  return (
    <BrowserRouter>
     <div className={classes.App}>
       <Header />
       <Routes>
        <Route path ='/' element={<Homepage />} exact />
       <Route path ='/tokens/:id' element={ <Tokenpage />} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
