import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GlobalStyle} from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Start from './components/Start';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle />
      <ToastContainer 
        toastStyle={{
          backgroundColor: '#E7E7E7',
          color: '#BEBEBE',
          textAlign: 'center'
        }}
        limit={1}
        
      />
        <Routes>
          <Route path='/' element={<Start/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;