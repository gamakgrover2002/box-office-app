import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starred from './pages/Starred';
import Show from './pages/Show';
import MainLayout from './components/MainLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element=<Home /> />
          <Route path="/starred" element=<Starred /> />
        </Route>
        <Route path="/*" element=<div>Page Not Found</div> />
        <Route path="/show/:showId" element=<Show /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
