import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound'; 
import CodeForInterview from './components/CodeForInterview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact to="/" element={<CodeForInterview/>} />
        <Route exact to="/all" element={<AllUsers/>} />
        <Route exact to="/add" element={<AddUser/>} />
        <Route exact to="/edit/:id" element={<EditUser/>} />
        <Route to="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;