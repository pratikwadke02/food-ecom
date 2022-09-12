import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
       
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}
export default App;
