import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
