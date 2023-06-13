import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LayoutWrapper from './components/layout-wrapper/LayoutWrapper';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWrapper />}>
            <Route index element={<></>}/>
            <Route path="/user" element={<></>}/>
            <Route path="/login" element={<></>}/>
            <Route path="/recipe/:id" element={<></>}/>
            <Route path="/saved" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
