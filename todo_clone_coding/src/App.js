import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Start from './pages/Start';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Notification from './pages/Notification';
import UserInfo from './pages/UserInfo';
import Setting from './pages/Setting';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle />
      <ToastContainer 
        toastStyle={{
          backgroundColor: '#E7E7E7',
          color: '#929292',
          textAlign: 'center',
          borderRadius: '50px'
        }}
        limit={1}
      />
        <Routes>
          <Route path='/' element={<Start/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
          <Route path='/Notification' element={<Notification/>}></Route>
          <Route path='/UserInfo' element={<UserInfo/>}></Route>
          <Route path='/UserInfo/Setting' element={<Setting/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;