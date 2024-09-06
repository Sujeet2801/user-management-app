// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail';
import UserForm from './components/UserForm';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/form" Component={UserForm} />
      <Route path="/user/:id" Component={UserDetail} />
      </Routes>
    </Router>
  );
}

export default App;
