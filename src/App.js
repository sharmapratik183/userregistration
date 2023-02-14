import Header from './Header';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Details from './Details';
import Error from './Error';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      
    </>
  );
}

export default App;
