import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import ItemDetail from './Components/ItemDetail';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Register from './Components/Register';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory/:id' element={<ItemDetail />}></Route>
        <Route path='/manage' element={<ItemDetail />}></Route>
        {/* <Route path='/add' element={}></Route>
        <Route path='/myitems' element={} ></Route> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
