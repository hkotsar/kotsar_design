import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFoundPage';
import Header from './components/header/Header';
import Tab1 from './components/tabs/Tab1';
import Tab2 from './components/tabs/Tab2';
import Tab3 from './components/tabs/Tab3';
import Tab4 from './components/tabs/Tab4';
import Tab5 from './components/tabs/Tab5';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Portfoolio - Heiki Kotsar</title>
      </Helmet>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projektid" element={<ProjectsPage />} >
              <Route path="/projektid/ux-ui-disain" element={<Tab1 />} />
              <Route path="/projektid/veebiarendus" element={<Tab2 />} />
              <Route path="/projektid/sisuhaldus" element={<Tab3 />} />
              <Route path="/projektid/graafiline-disain" element={<Tab4 />} />
              <Route path="/projektid/muud-projektid" element={<Tab5 />} />
            </Route>
            <Route path="/projektid/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
