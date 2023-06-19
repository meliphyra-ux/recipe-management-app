import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LayoutWrapper from './components/layout-wrapper/LayoutWrapper';
import SignIn from './roots/SignIn';
import User from './roots/User';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWrapper />}>
            <Route index element={<></>}/>
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
