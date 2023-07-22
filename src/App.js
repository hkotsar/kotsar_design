import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projektid" element={<ProjectsPage />} />
      <Route path="/projektid/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      
    </>
  );
}

export default App;
