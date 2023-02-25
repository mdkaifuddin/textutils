import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar title='TextUtils' about='About Us' />
      <Routes>
        <Route exact path ='https://www.mdkaifuddin.github.io/textutils' element={<TextForm/>}/>
        <Route exact path ='https://www.mdkaifuddin.github.io/textutils/about' element={<About/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
