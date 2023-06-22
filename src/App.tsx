import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LayoutWrapper from './components/layout/LayoutWrapper';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User';
import Main from './pages/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWrapper />}>
            <Route index element={<Main />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/recipe/:id" element={<></>}/>
            <Route path="/saved" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
